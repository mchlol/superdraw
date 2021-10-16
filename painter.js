const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', canvasResize);

function canvasResize() {
    alert("Resetting canvas!")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;
ctx.lineCap = 'round';

let shouldPaint = false;

document.addEventListener('mousedown', function (event) {
    shouldPaint = true;
    ctx.moveTo(event.pageX, event.pageY);
    ctx.beginPath();
})

document.addEventListener('mouseup', function (event) {
    shouldPaint = false;
})

document.addEventListener('mousemove', function (event) {
    if (shouldPaint) {
        ctx.lineTo(event.pageX, event.pageY);
        ctx.stroke();
    }
});

// document.querySelectorAll('main button').forEach(btn => {
//     btn.addEventListener('click', function (event) {
//         ctx.strokeStyle = this.style.backgroundColor
//         console.log('clicked')
//     })
// })

document.querySelectorAll('main span').forEach(icon => {
    icon.addEventListener('click', function (event) {
        ctx.strokeStyle = this.style.color
        console.log('clicked')
    })
})