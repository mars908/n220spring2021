let dvSquare = document.getElementById("number");
//links the div on the html page to this javascript file
dvSquare.innerHTML = "Make a Decimal"
dvSquare.style.backgroundColor = "#32a836";
dvSquare.style.width = "60px";
dvSquare.style.height = "50px";

//These set the style settings for the sqaure created by the div tag

function generate() {
   let num = Math.random();
   
   


//This function takes the width and height of the previous version of each square, and then grows them by 10%
let newEl = document.createElement("div");

newEl.innerHTML = num;
newEl.style.backgroundColor = "#f54242";
newEl.style.width = "200px";
newEl.style.margin = "2px";

document.body.appendChild(newEl);
}