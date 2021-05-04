let dvSquare = document.getElementById("square");

dvSquare.style.width = "250px";
dvSquare.style.height = "250px";
dvSquare.style.margin = "150px"
dvSquare.style.backgroundColor = "#000000";


function getColor() {
    dvSquare.style.backgroundColor = randomColor(); 

    let newEl = document.createElement("div");

    newEl.innerHTML = dvSquare.style.backgroundColor;
    newEl.style.backgroundColor = dvSquare.style.backgroundColor;
    newEl.style.width = "130px";
    newEl.style.margin = "15px";
    document.body.appendChild(newEl);

    let reset = Math.random();
    let x = newEl.innerHTML;
    if(reset < .1) x = newEl.innerHTML + " If you want to see my favorite RGB code, keep clicking!" ;
    newEl.innerHTML = x; 

    if(color == "rgb(108, 20, 184)") {
        x = newEl.innerHTML + "You found my favorite RGB code!";
    } else {
        x = newEl.innerHTML;
    }
    
}


function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
}

