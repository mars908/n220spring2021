let colors = [ "#fc0303", "#fc8403", "#f0fc03", "#03fc0b", "#0313fc", "#7f03fc", "#fc03f8"]

function setup() {
    createCanvas(400, 300);

    for( var x = 0; x < colors.length; x ++) {
        fill( colors[x] );
        circle( 30 + 40 * x,  40 + 30 * x, 30 );
    }
}