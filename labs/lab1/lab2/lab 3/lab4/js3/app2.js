
let positions = [ 0,0,0,0,0,0,0,0,0,0,0 ];
let positionsy = [ 0,0,0,0,0,0,0,0,0,0,0 ];

function setup() {
    createCanvas(400, 300);

    


}

function draw() {

    background(50);

    positions.push( mouseX );
    positions.shift();

    positionsy.push( mouseY );
    positionsy.shift();

    for( var i = 0; i < positions.length; i ++) {
        circle( positions[i], positionsy[i], 20);
    }
}