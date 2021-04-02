let txtName = document.getElementById("txtName");


function numGuess() {

    if(txtName.value < 17){

        console.log("Your guess is too low, try again!");
        txtName.value = "";
    } else if (txtName.value == 17){

        console.log("Your guess is correct!");
        txtName.value = "";
    } else if (txtName.value > 17){
        
        console.log("Your guess is too high, try again!");
        txtName.value = "";
   
    }
}