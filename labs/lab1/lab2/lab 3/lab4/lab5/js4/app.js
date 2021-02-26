let colors = [ "#f02318", "#f0f018", "#18f03c" ]

function setup() {
    createCanvas(400, 300);

    fill(200);
    rect(50, 50, 150, 200);
    

    for( var x = 0; x < colors.length; x ++) {
        fill( colors[x] );
        circle( 125, 90 + 60 * x, 25);
    }
}