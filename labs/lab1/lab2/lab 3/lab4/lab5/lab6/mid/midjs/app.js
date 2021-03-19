var myRect = { 
    w: 50,
    h: 75,
    x: 100,
    y: 100,
    color: [250, 0, 50]
}

function setup() {
    createCanvas(400,300);
}

function draw() {

    fill(myRect.color);
    rect(myRect.x, myRect.y, myRect.w, myRect.h);
}