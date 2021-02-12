function setup() {
    createCanvas(350, 350);

}

function draw() {
    background(200);

    noFill();
    

    for (var x = 0; x < 35; x++) {

        circle(175, 175, x * 5);
    }
}