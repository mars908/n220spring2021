let x = 1;
let a = 1;
let trail = 0.03;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(200, 0, 255);
  let targetX = mouseX;
  let mx = targetX - x;
  x += mx * trail;

  let targetY = mouseY;
  let ma = targetY - a;
  a += ma * trail;

  fill(0,0,0);
  ellipse(x, a, 66, 66);


  if (mouseX < x + 7) {
    fill(255,0,0);
  } else {
    fill(0,0,0);
  }
  
}