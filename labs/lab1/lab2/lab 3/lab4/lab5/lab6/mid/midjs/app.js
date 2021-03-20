
let y = 0;
// gets a vaariable to allow the circle to move on mouse click


function setup() {
    createCanvas(400, 300);

}
//This code just creates a small 400 by 300 canvas for objects to be drawn on.

function draw() {

    background(50);
    //This colors the background to be a bit darker for contrast.

    fill(5000 / mouseX, 0, 0);
    //this takes the current position of the mouse, and uses that number to determine how bright of a red each circle becomes.
    circle(30, mouseY + y, 9000 / mouseX);
    //draws a circle with the y coordinate being the mouse's y pos with the y variable at the top.
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    circle(30, mouseY + y, 9000 / mouseX);
    //Each circle also as their radius synced to the mouse's x position, divided by 15 so its not huge, but still changes size correctly.
    
    if(mouseIsPressed){
        y = y + 1;
    }
  
}

