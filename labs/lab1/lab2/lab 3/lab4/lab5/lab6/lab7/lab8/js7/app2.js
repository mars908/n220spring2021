//I started by creating a loop to generate 100 squares
for (var i=0; i<100; i++){
let main = document.querySelector("#main");
//By making two elements, this allows we to change the second element and put it into this variable.
let dvSquares = document.createElement("squares");
//links the div on the html page to this javascript file


dvSquares.style.width = "20px";
dvSquares.style.height = "20px";
dvSquares.style.float = "left";
dvSquares.style.backgroundColor = randomColor();
//These set the style settings for the squares created by the div tag above

main.appendChild(dvSquares);

}

function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}
//this function gives the random color function to use on the squares div above

