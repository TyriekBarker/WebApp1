canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");


let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

canvas.height = windowHeight;
canvas.width = windowWidth;

canvas.style.background = "#ff8";

class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color; 
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }
}

let allCircles = [];

let createCircle = function(circle) {
    circle.draw(context);
}

for (let numbers = 0; numbers < 10; numbers++) {
    let randomX = Math.random() * windowWidth;
    let randomY = Math.random() * windowHeight;

    let myCircle = new Circle(randomX,randomY,25,"black");
    allCircles.push(myCircle);
    createCircle(allCircles[numbers]);
}

console.log("");