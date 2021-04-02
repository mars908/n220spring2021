let billNumber = document.getElementById("billNumber");


function cashTotal() {
    let x = Number(billNumber.value * .15);
    let y = Number(billNumber.value);
    let z = Number(x + y);
    //These variables help to create the needed equations for the tip of the bill, and the total sum after the two are added together
    console.log("Tip: $" + x + " Total: $" + z);
    //This line displays x, which is the tip, and then displays x, which is the tip + the original bill, which gives us the total bill
}

