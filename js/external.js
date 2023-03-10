//variables for selecting the canvas element
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

//settings for the canvas element
canvas.width = window.innerWidth;
canvas.hieght = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

//variables for the drawing location on canvas
let isDrawing = false;
let lastX = 0;
let lastY = 0;

//function for drawing
function draw(e) {
    if (!isDrawing) return;
}

//eventlistners for the mouse movement
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown',() => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
