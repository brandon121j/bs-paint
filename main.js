/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

const selector = document.querySelectorAll('.palette-color');

const squares = document.querySelectorAll('.canvas');

let brush = document.querySelector('.current-brush');

let darkMode = document.querySelectorAll('.dark-mode');



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/


let picker = '';

let hover = false;

let clicking = false;

for (const collector of selector) {
  collector.addEventListener('click', selecting);
  collector.style.cursor = 'pointer';
}

// for (const )

function selecting(event) {
  // picker = event.target.className;
  picker = event.target.classList[1];
  brush.classList.replace(brush.classList[1], event.target.classList[1]);
  // brush.classList.add(event.target.classList[1])
  // console.log(brush);
}

for (const looper of squares) {
  // looper.addEventListener('mouseover', function(event) {
  // });

  looper.addEventListener('click', coloring)
  looper.style.cursor = 'pointer';
}

// while (true) {
//   if (selector.mousdown === true) {
//     console.log('yes')
//   }
// }

function coloring(event) {
  event.target.classList.replace(event.target.classList[1], picker);
  console.log(event.target);
}

for (const many of darkMode) {
counter = 0;
many.addEventListener('click', function() {
  counter++;
  if (counter / 2 !== 0) {
    document.querySelector('.color-1').style.backgroundColor = 'dark-red';
    document.querySelector('.color-2').style.backgroundColor = 'dark-blue';
    document.querySelector('.color-3').style.backgroundColor = 'dark-purple';
    document.querySelector('.color-4').style.backgroundColor = 'dark-magneta';
  }
});
}

// selector.addEventListener('click', function(event) {
//   event.target.console.log(style.color);
// });

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
