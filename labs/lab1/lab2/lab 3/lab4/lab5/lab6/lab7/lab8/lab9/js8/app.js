let addNum = document.getElementById("addNum");
//this grabs the number the user types from the html and allows me to use it in the split array later

function findSum() {

    var stringVals = addNum.value;

    let myArray = stringVals.split(",");

    let nums = 0;

    let sum = 0;
    //making two variables lets me have 1 variable for the average, and one for the sum
    for(let i = 0; i < myArray.length; i++) {
        nums += Number(myArray[i]);
        sum += Number(myArray[i]);
    }

    let average = nums / myArray.length;
    console.log(average);
    console.log(sum);
    addNum.value = "";
    //this bottom section actually does the dividing for the average, and displays them to the log.
}