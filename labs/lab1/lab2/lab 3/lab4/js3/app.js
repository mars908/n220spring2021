let colors = [ "#a84e32", "#32a85a", "#4e32a8" ]

function setup() {
    createCanvas(400, 300);

    for( var x = 0; x < colors.length; x ++) {
        fill( colors[x] );
        rect( 40, 50 * x, 120, 50);
    }
}