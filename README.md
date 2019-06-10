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

5. [Flex Panel Gallery](http://tylerhawkins.info/javascript30/05-Flex-Panel-Gallery/)

	Takeaways: Flexbox is great for positioning elements! Transitions look even cooler when you use a cubic-bezier timing function. The transitionend event is only helpful if you can avoid having the transition called multiple times. For example, the panels grow and shrink in this demo, so unless you disable the clicking during the transition, you can get into a weird state if someone clicks multiple times. I solved the problem with CSS transitions alone, and you can see if you click on a panel rapidly it is handled well. You can include orientation specific CSS on mobile devices using media queries. In my case, I only show the panels when the device is in landscape orientation.

6. [Type Ahead](http://tylerhawkins.info/javascript30/06-Type-Ahead/)

	Takeaways: When using the fetch API, the first thing you need to do is transform the data with the `.json()` method. Autocomplete dropdowns take a lot of work to be accessible. They need to have proper ARIA roles and attributes, they need to show hover and focus indicators, and they need to be accessible for keyboard-only users.

7. [Array Cardio Day 2](http://tylerhawkins.info/javascript30/07-Array-Cardio-Day-2/)

	Takeaways: Know your array helpers. `some` returns `true` if at least one element in the array meets the test function's criteria or `false` if none of the elements meet the test function's criteria. `every` returns `true` if all the elements in the array meet the test function's criteria or `false` if even one element doesn't meet the test function's criteria. `find` returns the first element that meets the test function's criteria or returns `undefined` if none of the elements meet the test function's criteria. `findIndex` returns the index of the first element that meets the test function's criteria or -1 if none of the elements meet the test function's criteria.

8. [Fun with HTML5 Canvas](http://tylerhawkins.info/javascript30/08-Fun-with-HTML5-Canvas/)

    Takeaways: Drawing on a canvas is relatively simple. If you change the canvas's `width` attribute, the canvas clears itself. On a device that uses a mouse, the drawing functionality can be achieved with mouse events like `mousedown`, `mousemove`, `mouseup`, and `mouseout`. In order to make the drawing functionality work on touch screen devices, you must implement the corresponding touch events, like `touchstart`, `touchmove`, and `touchend`.
