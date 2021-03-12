var myCircle = { 
    x: 50,
    y: 50,
    r: 25,
    color: [20, 250, 250]
}

function setup() {
    createCanvas(400,300);
}

function draw() {

    fill(myCircle.color);
    myCircle.x += 2;
    myCircle.y += 2;
    circle(myCircle.x, myCircle.y, myCircle.r);
}