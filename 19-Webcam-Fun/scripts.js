(function() {  
  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');
  const takePhotoButton = document.querySelector('#take-photo-button');
  const switchCameraButton = document.querySelector('#switch-camera-button');
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const greenScreenControls = document.querySelector('.green-screen-controls');
  const nonVideoContainer = document.querySelector('.non-video-container');


  let activeFilter = document.querySelector('[name="active-filter"]:checked').value;
  const filterOptions = {
    normal,
    'green-screen': greenScreen,
    'rgb-split': rgbSplit,
    'red-effect': redEffect,
    'grey-scale': greyScale,
    embossed,
    inverted,
  };

  const videoConfig = { video: { facingMode: 'user' }, audio: false };

  function switchCamera() {
    videoConfig.video.facingMode = videoConfig.video.facingMode === 'user' ? 'environment' : 'user';
    getVideo(videoConfig);
  }

  function getVideoSuccessHandler(stream) {
    if ('srcObject' in video) {
      video.srcObject = stream;
    } else {
      video.src = URL.createObjectURL(stream);
    }
    video.play();
    setTimeout(resizeCanvas, 1000); // resize hack
  }

  function getVideoErrorHandler(error) {
    alert(`Video error! ${error}`);
  }

  function getVideo(videoConfig) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(videoConfig)
        .then(getVideoSuccessHandler)
        .catch(getVideoErrorHandler);
    }
    // Legacy video listeners
    else if (navigator.getUserMedia) { // Standard
      navigator.getUserMedia(videoConfig, function(stream) {
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          video.src = stream;
        }
        video.play();
        setTimeout(resizeCanvas, 1000); // resize hack
      }, getVideoErrorHandler);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
      navigator.webkitGetUserMedia(videoConfig, function(stream) {
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          video.src = window.webkitURL.createObjectURL(stream);
        }
        video.play();
        setTimeout(resizeCanvas, 1000); // resize hack
      }, getVideoErrorHandler);
    } else if (navigator.mozGetUserMedia) { // WebKit-prefixed
      navigator.mozGetUserMedia(videoConfig, function(stream) {
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          video.src = window.URL.createObjectURL(stream);
        }
        video.play();
        setTimeout(resizeCanvas, 1000); // resize hack
      }, getVideoErrorHandler);
    } else {
      getVideoErrorHandler('Unknown error. Browser doesn\'t support getUserMedia API.');
    }
  }

  function paintToCanvas() {
    const [width, height] = resizeCanvas();

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height); // put the video on the canvas
      let pixels = ctx.getImageData(0, 0, width, height); // take the pixels out
      pixels = filterOptions[activeFilter](pixels); // mess with them
      ctx.putImageData(pixels, 0, 0); // put them back
    }, 16);
  }

  function takePhoto() {
    // play the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    // and create a downloadable image
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome" />`;
    strip.insertBefore(link, strip.firstChild);
  }

  function normal(pixels) {
    return pixels;
  }

  function redEffect(pixels) {
    const pixelsLength = pixels.data.length;
    for (let i = 0; i < pixelsLength; i+=4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
      pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    }
    return pixels;
  }

  function rgbSplit(pixels) {
    const pixelsLength = pixels.data.length;
    for (let i = 0; i < pixelsLength; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // BLUE
    }
    return pixels;
  }

  function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });

    const pixelsLength = pixels.data.length;
    for (i = 0; i < pixelsLength; i = i + 4) {
      const red = pixels.data[i + 0];
      const green = pixels.data[i + 1];
      const blue = pixels.data[i + 2];
      const alpha = pixels.data[i + 3];

      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }

    return pixels;
  }

  function greyScale(pixels) {
    const pixelsLength = pixels.data.length;
    for (let i = 0; i < pixelsLength; i+=4) {
      const red = pixels.data[i + 0]; // RED
      const green = pixels.data[i + 1]; // GREEN
      const blue = pixels.data[i + 2]; // BLUE
      const avg = (red + green + blue) / 3;
      pixels.data[i + 0] = avg;
      pixels.data[i + 1] = avg;
      pixels.data[i + 2] = avg;
    }
    return pixels;
  }

  function embossed(pixels) {
    const width = pixels.width;
    const pixelsLength = pixels.data.length;
    // Loop through the subpixels, convoluting each using an edge-detection matrix.
    for (let i = 0; i < pixelsLength; i++) {
      if (i % 4 === 3) { continue; }
      pixels.data[i] = 127 + 2 * pixels.data[i] - pixels.data[i + 4] - pixels.data[i + width * 4];
    }
    return pixels;
  }

  function inverted(pixels) {
    const pixelsLength = pixels.data.length;
    for (let i = 0; i < pixelsLength; i+=4) {
      pixels.data[i + 0] = 255 - pixels.data[i + 0]; // RED
      pixels.data[i + 1] = 255 - pixels.data[i + 1]; // GREEN
      pixels.data[i + 2] = 255 - pixels.data[i + 2]; // BLUE
    }
    return pixels;
  }

  function updateActiveFilter(e) {
    activeFilter = e.target.value;
    const greenScreenControlsDisplayValue = activeFilter === 'green-screen' ? 'block' : 'none';
    greenScreenControls.style.display = greenScreenControlsDisplayValue;
    resizeCanvas();
  }

  function resizeCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    const maxHeight = window.innerHeight - nonVideoContainer.offsetHeight - 200;
    const maxWidth = window.innerWidth;
    const headingWidth = document.querySelector('h1').offsetWidth;
    const isMobileSize = maxWidth <= 768;
    if (isMobileSize) {
      canvas.style.height = 'initial';
      canvas.style.width = `${nonVideoContainer.offsetWidth}px`;
    } else {
      canvas.style.height = `${Math.min(maxHeight, (maxWidth * (video.videoHeight / video.videoWidth)))}px`;
      canvas.style.width = 'initial';
    }

    return [width, height];
  }

  getVideo(videoConfig);
  resizeCanvas();

  video.addEventListener('canplay', paintToCanvas);
  takePhotoButton.addEventListener('click', takePhoto);
  switchCameraButton.addEventListener('click', switchCamera);
  radioButtons.forEach(radioButton => radioButton.addEventListener('change', updateActiveFilter));
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('orientationchange', resizeCanvas);
})();
