/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const controls = player.querySelector('.player__controls');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay(e) {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  e.stopPropagation();
}

function handleKeyPressToPlay(e) {
  if (e.target === player && (e.keyCode === 13 || e.keyCode === 32)) {
    togglePlay(e);
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function showControls() {
  controls.style.transform = 'translateY(0)';
}

function hideControls() {
  controls.style.transform = 'translateY(100%) translateY(-5px)';
}

/* Hook up the event listeners */
player.addEventListener('click', togglePlay);
player.addEventListener('keypress', handleKeyPressToPlay);
player.addEventListener('focus', showControls);
video.addEventListener('mouseenter', showControls);
player.addEventListener('blur', hideControls);
video.addEventListener('mouseout', hideControls);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
toggle.addEventListener('focus', showControls);
toggle.addEventListener('blur', hideControls);
skipButtons.forEach(button => {
  button.addEventListener('click', skip);
  button.addEventListener('focus', showControls);
  button.addEventListener('blur', hideControls);
});
ranges.forEach(range => {
  range.addEventListener('input', handleRangeUpdate);
  range.addEventListener('focus', showControls);
  range.addEventListener('blur', hideControls);
});

let mousedown = false;
progress.addEventListener('focus', showControls);
progress.addEventListener('blur', hideControls);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
