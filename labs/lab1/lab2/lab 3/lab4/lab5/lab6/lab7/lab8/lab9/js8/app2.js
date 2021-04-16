let findWord = document.getElementById("findWord");

function wordSearch() {

    let sentence = findWord.value;

    let splitSentence = sentence.split(" ");

    let wordOne = "clear";

    let wordTwo = "water";

    let wordThree = "tire";
    // these three variables are made to check for if the user types in one of the bad words

    for(let i = 0; i < splitSentence.length; i++){
        if(splitSentence[i] == wordOne, wordTwo, wordThree) {
            console.log("found " + i +  " words");
        }
    }
    //the if statements runs the typed array variables through the loop, and if any variables matchs the bad word variables, it reports it, and how many it found.
    findWord.value = "";
}