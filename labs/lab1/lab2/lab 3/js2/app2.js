let rows = 3;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    fill(255, 0, 0);
    

    for (let row = 0; row <= rows; row++) {
      
      for (let column = 0; column <= row; column++) {
         square(column * 30, row *30, 30);
      }    
   }
}