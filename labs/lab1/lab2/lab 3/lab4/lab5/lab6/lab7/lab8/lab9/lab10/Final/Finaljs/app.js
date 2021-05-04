let dvSquare = document.getElementById("square");
//This tag grabs the div from the html side of the program and makes it into a variable that javascript can use in other functions.

dvSquare.style.width = "250px";
dvSquare.style.height = "250px";
dvSquare.style.margin = "150px"
dvSquare.style.backgroundColor = "#000000";
//these tags set up the intial attributes of the square div that appears on the webpage intially, with the above sizes and a starting color of black.


function getColor() {
    //this function is made to change the color of the large square in the center of the page to a random color on click, and then list another small rectangle below the square with the color and the rgb color of all of the colors that the user has seen so far.
    
    dvSquare.style.backgroundColor = randomColor(); 
    //this sets the color of the square to a random color each time the square is clicked.
    
    let newEl = document.createElement("div");
    //this makes a new element that i use later to create the tags where all of the previous colors are listed along with their rgb codes.
    
    newEl.innerHTML = dvSquare.style.backgroundColor;
    //By having this line of code, the inner text of each subsequent tag that appears will have the rgb code of the color of the square in the middle of the screen.

    newEl.style.backgroundColor = dvSquare.style.backgroundColor;
    newEl.style.width = "130px";
    newEl.style.margin = "15px";
    //These tags also set the dimensions and margins of the small tags that appear below the main square.


    document.body.appendChild(newEl);
    //This line actually makes the tags appear below the square

    let reset = Math.random();
    let x = newEl.innerHTML;
    if(reset < .1) x = newEl.innerHTML + " If you want to see my favorite RGB code, keep clicking!" ;
    newEl.innerHTML = x; 
    //I incorparted this segment of code to add a mechanic to my app that will very rarely remind the user about my favortie hidden rgb code that they could find.

    if(color == "rgb(108, 20, 184)") {
        x = newEl.innerHTML + "You found my favorite RGB code!";
    } else {
        x = newEl.innerHTML;
    }
    //This if loop checks the rgb text in the list of previous rgb codes and sees if the codes from this statement and the color of the square match. If they don't, it simply returns the normal value that it has been.
    
}


function randomColor() {
    //This function provides the random color generation for the element and the main square
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    //These variables each make random numbers from 0-255 for each r,g, and b value.
    var color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
    //finally, this variable takes the three varaibles above and puts them into a string that is displayed in the small tags below the main square, and displays the values of the variables in this string to the user.
}

