// You're starting your business as a strictly online DJ (DJ JS) 
// and you want to start by creating a website where people can change the color 
// of a square on the page by interacting with different HTML Events.

// The square's color will change as follows:

// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window(not just over the square).

// You should also be able to press the first letter of the colors 
// (typing "r" on the keyboard for "red", for example) and have the box 
// change to that color. Check this site for a full list of keyboard key codes.

// https://vanillajstoolkit.com/helpers/scrollstop/
/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */
var scrollStop = function (callback) {

    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;

    // Setup scrolling variable
    var isScrolling;

    // Listen for scroll events
    window.addEventListener('scroll', function (event) {

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {

            // Run the callback
            callback();

        }, 66);

    }, false);

};

let disco = document.getElementById('square');

function changeBackgroundTo(color) {
    disco.style.background = color;
}

disco.addEventListener('mouseleave', function() {
    changeBackgroundTo('white');
});

disco.addEventListener('mouseover', function() { 
    changeBackgroundTo('blue');
});

disco.addEventListener('mousedown', function() {
    changeBackgroundTo('red');
})

disco.addEventListener('mouseup', function() {
    changeBackgroundTo('yellow');
});

disco.addEventListener('dblclick', function() {
    changeBackgroundTo('green');
});

window.addEventListener('scroll', function() {
    changeBackgroundTo('orange');
});

scrollStop(function() {
    changeBackgroundTo('white');
});

document.addEventListener('keydown', function (event) {
    switch (event.which) {
        case 66:
            changeBackgroundTo('blue');
            break;
        case 82:
            changeBackgroundTo('red');
            break;
        case 89:
            changeBackgroundTo('yellow');
            break;
        case 71:
            changeBackgroundTo('green');
            break;
        case 79:
            changeBackgroundTo('orange');
            break;
        default: 
            changeBackgroundTo('white'); 
    }
})

