

let objects = [
    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 }
];


for (var i=0; i<3; i++){
    let main = document.querySelector("#main");
    //By making two elements, this allows we to change the second element and put it into this variable.
    let dvSquares = document.createElement("squares");
    //links the div on the html page to this javascript file
    
    
    dvSquares.style.width = objects[0].width + "px";
    dvSquares.style.height = objects[0].height + "px";
    dvSquares.style.float = "left";
    dvSquares.style.backgroundColor = objects[0].color;
    //These set the style settings for the squares created by the div tag above
    
    main.appendChild(dvSquares);
    
}


