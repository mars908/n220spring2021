function setup() {
    createCanvas(800, 400);

}

function draw() {
    background(200);

    fill(10);

    for (var x = 0; x < 25; x++) {

        circle(x * 30, 300, 15);
    }

    if (x == 3,6,9,12,15) {
        fill(128,0,128);
    }

    if (x == 5,10,15) {
        square(x * 30, 300, 15);        
        fill(0,255,0);
    }

    if (x == 15) {
        square(x * 30, 300, 15);
        fill(0,0,255);
    }
}
