let dvSquare = document.getElementById("square");
//links the div on the html page to this javascript file

dvSquare.style.backgroundColor = "#32a836";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";
//These set the style settings for the sqaure created by the div tag

function growSquare() {
    let x = document.getElementById("square").offsetWidth * 1.1;
    let y = document.getElementById("square").offsetHeight * 1.1;
    dvSquare.style.width = x + 'px';
    dvSquare.style.height = y + 'px';

}
//This function takes the width and height of the previous version of each square, and then grows them by 10%