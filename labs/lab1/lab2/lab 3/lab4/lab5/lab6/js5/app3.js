var myCircle = { 
    x: 200,
    y: 150,
    r: 15,
    color: [250, 0, 250],
    update: function () {

        fill(myCircle.color);
        clear();
        circle(myCircle.x, myCircle.y, myCircle.r);
        if (keyIsDown(LEFT_ARROW)) {
          myCircle.x -= 2;
        }
        if (keyIsDown(RIGHT_ARROW)) {
          myCircle.x += 2;
        }
        if (keyIsDown(UP_ARROW)) {
          myCircle.y -= 2;
        }
        if (keyIsDown(DOWN_ARROW)) {
          myCircle.y += 2;
        }
    }
}

function setup() {
    createCanvas(400,300);
}

function draw() {
    myCircle.update();
   
}