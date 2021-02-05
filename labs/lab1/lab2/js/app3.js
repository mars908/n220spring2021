let xpos = 0; 

function setup() {
    createCanvas(800, 600);

}

function draw() {
    background(150, 50, 250);
    xpos = xpos + 5;
    fill(35, 40, 50);

    if( xpos > 780 ) {
       xpos == 10;
    }

    circle(xpos, 300, 40);
}