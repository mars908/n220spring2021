function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(100);

    noFill();

    for (var x = 0; x < 200; x++) {
        circle(300, 200, x * 1);
    }
}