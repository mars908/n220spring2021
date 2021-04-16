let findWord = document.getElementById("findWord");

function wordSearch() {

    let sentence = findWord.value;

    let splitSentence = sentence.split(" ");

    let wordOne = "clear";

    let wordTwo = "water";

    let wordThree = "tire";

    for(let i = 0; i < splitSentence.length; i++){
        if(splitSentence[i] == wordOne, wordTwo, wordThree) {
            console.log("found " + i +  " words");
        }
    }

    findWord.value = "";
}