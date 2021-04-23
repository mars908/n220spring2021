let element = document.getElementById("answer");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
    let x = event.target.getAttribute("data-response");
    element.style.innerHTML = x;

}

