let element = document.getElementById("rgb");
element.style.width = "300px";
element.style.height = "100px";
element.style.backgroundColor = "#111";
element.style.float = "left";

function colorOne(event) {
    let x = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = number(x + 1 + "px");
}

function colorTwo(event) {
    let x = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = number(x + 5 + "px");
}

function colorThree(event) {
    let x = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = number(x + 10 + "px");
}