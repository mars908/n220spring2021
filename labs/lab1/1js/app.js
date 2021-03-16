let x = 60;
let y = 250;

function setup() {
    createCanvas(400,300);
}

function draw() {

    fill(16,217,13);
    circle(x, y, 20);
    circle(x + 16, y - 31, 20);
    circle(x + 36, y - 64, 20);
    circle(x + 62, y - 86, 20);
    circle(x + 93, y - 108, 20);
    circle(x + 125, y - 125, 20);
    //these circles make up the body of the snake image
    fill(250,0,0);
    rect(235, 120, 10, 40);
    //this is the red "tongue" for the snake
    fill(16,217,13);
    triangle(200, 100, 260, 125, 200, 145);
    //This is the head of the snake
    fill(0,0,0);
    circle(x + 160, y - 132, 7);
    //and this is the eye
    

}