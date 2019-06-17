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

9. [Console Tricks](http://tylerhawkins.info/javascript30/09-Console-Tricks/)

	Takeaways: There are many more ways to write data to the console than just with `console.log`! You can do string interpolation with `%s`, but template literals make that feature a little less exciting. You can style your message with `%c`, which is pretty neat. Other useful methods are `warn`, `error`, `info`, `assert`, `clear`, `dir`, `group`/`groupCollapsed`/`groupEnd`, `count`, `time`/`timeEnd`, and `table`.

10. [Hold Shift and Check Checkboxes](http://tylerhawkins.info/javascript30/10-Hold-Shift-and-Check-Checkboxes/)

    Takeaways: Shift-clicking to select multiple boxes is a really nice feature to help make the user experience better when dealing with long lists. When implementing this functionality you need to handle both the selecting and deselecting of multiple checkboxes. It's important that inputs have labels on them so that both the checkbox itself and the label text are clickable. You can disable text highlighting with the CSS rule `user-select: none`.

11. Custom Video Player

	Coming soon!

12. [Key Sequence Detection](http://tylerhawkins.info/javascript30/12-Key-Sequence-Detection/)

	Takeaways: Nothing too exciting here. Key loggers are pretty simply to make, just listen to the `keyup` event and record the event's `key` or `keyCode` value.

13. [Slide in on Scroll](http://tylerhawkins.info/javascript30/13-Slide-in-on-Scroll/)

	Takeaways: Introducing images or other content with subtle animations can be a nice touch to your website when done properly. When handling scroll events (or any event that fires repeatedly over a short period of time), you can choose to debounce or throttle your function so that it runs less frequently. A debounced function sets up a timer that gets reset every time the function is called, so your wrapped function only executes once the timer has been able to fully run. A throttled function on the other hand simply limits how often the wrapped function can be called and does not reset its internal timer when the function is called repeatedly. For example, if you are listening to the scroll event with a throttled function that is limited to run every 200ms, and you scrolled non-stop for about one second, the throttled function would be called 5 times. A debounced function would have only been called once, 200ms after you had stopped scrolling.

14. [JavaScript References vs. Copying](http://tylerhawkins.info/javascript30/14-JavaScript-References-vs-Copying/)

    Takeaways: Numbers, strings, and booleans are passed by copy (or by value). Arrays and objects are passed by reference, so you need to be sure to actually make a copy of the array or object if you want to modify the copy without also modifying the original. You can make copies of arrays with methods like `slice`, `concat`, `Array.from`, or the spread operator (`...`). You can make copies of objects with methods like `Object.assign` or the spread operator (`...`). One thing to note is that all these methods make shallow clones, meaning that they only make copies one level deep. So if you have a deeply nested object, you make a copy of it, and then you modify a value on the copied object that is on the second level or deeper, it will also modify the value of the original object too.
