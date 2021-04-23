let element = document.getElementById("squareChange");
element.addEventListener("click", itsClicked);
element.style.width = "200px";
element.style.height = "200px";
element.style.backgroundColor = "#222";
element.style.float = "left";
element.style.margin = "5px";

let elementTwo = document.getElementById("squareChangeTwo");
elementTwo.addEventListener("click", itsClicked);
elementTwo.style.width = "200px";
elementTwo.style.height = "200px";
elementTwo.style.backgroundColor = "#222";
elementTwo.style.float = "left";
elementTwo.style.margin = "5px";

let elementThree = document.getElementById("squareChangeThree");
elementThree.addEventListener("click", itsClicked);
elementThree.style.width = "200px";
elementThree.style.height = "200px";
elementThree.style.backgroundColor = "#222";
elementThree.style.float = "left";
elementThree.style.margin = "5px";


function itsClicked(event) {
    let x = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = x;

}

