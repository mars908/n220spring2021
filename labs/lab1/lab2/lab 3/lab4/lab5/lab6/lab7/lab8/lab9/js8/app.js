let addNum = document.getElementById("addNum");

function findSum() {

    var stringVals = addNum.value;

    let myArray = stringVals.split(",");

    let nums = 0;

    let sum = 0;

    for(let i = 0; i < myArray.length; i++) {
        nums += Number(myArray[i]);
        sum += Number(myArray[i]);
    }

    let average = nums / myArray.length;
    console.log(average);
    console.log(sum);
    addNum.value = "";
}