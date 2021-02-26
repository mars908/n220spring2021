let colors = [ "#e39d3b", "#4fe38a"]
//starting color base array for the "scoops" of ice cream

function setup() {
    createCanvas(400, 300);
//This function creates the base setup for the area to draw on, and makes a small canvas for the objects.

    fill(112,95,65);
    triangle(80, 150, 130, 250, 185, 150);

    fill(217,85,146);
    circle(120, 100, 30);

//These two object help make the picture come together, with the triangle being a cone, and the other circle being drawn seperately for the appropriate angle. 

    for( var x = 0; x < colors.length; x ++) {
        fill( colors[x] );
        circle( 120 + 40 * x,  155 - 30 * x, 30 );
    }
}
//This for loop takes the other two circles and uses the new variable x to keep track of the circles position, and have the circles change colors each time it moves across the screen.