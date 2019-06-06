![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

My solutions for the JavaScript 30 Day Challenge.

# Table of Contents

1. [JavaScript Drum Kit](http://tylerhawkins.info/javascript30/01-JavaScript-Drum-Kit/)
    
    Takeaways: Be sure to note the differences between keydown, keyup, and keypress. If using keydown, the event continues to fire multiple times if the user holds the key down, so you need to be aware of that and account for that if needed. I disabled the key after the initial keydown and then re-enabled it on keyup to avoid the sound being played a million times.

2. [JS and CSS Clock](http://tylerhawkins.info/javascript30/02-JS-and-CSS-Clock/)

    Takeaways: `transform-origin` is useful for controlling where the transform takes place. The default is 50%, or in the middle of the element, and 0% or 100% puts the origin at one of the ends.

3. [CSS Variables](http://tylerhawkins.info/javascript30/03-CSS-Variables/)

    Takeaways: Range and color input styles vary from browser to browser, so be sure to test everywhere you plan on supporting. `element.dataset` is supported in IE11+, but `element.getAttribute` is supported everywhere. `filter` is a neat CSS property for applying various graphical effects, but it's newer so it isn't supported in old browsers. If you are using your mouse, the `change` event fires on range inputs when you've let go (so on `mouseup`), but the `input` event fires anytime the input changes, even while you are holding the click and dragging.

4. [Array Cardio Day 1](http://tylerhawkins.info/javascript30/04-Array-Cardio-Day-1/)

    Takeaways: Know your array helpers. DOM APIs like `querySelectorAll` return a collection of nodes (in this case, DOM elements) in a `NodeList`, which is somewhat similar to an array but doesn't have all the methods that the `Array` prototype does. For example, you can't call `reduce` on a `NodeList`. You first need to convert the `NodeList` to an array, which can be done with `Array.from()`. `reduce()` is an efficient way to combine a `map()` and `filter()` so that you don't have to loop through the array twice.