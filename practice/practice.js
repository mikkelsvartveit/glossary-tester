// This function returns the total number of words in the list
function numberOfWords() {
    var number;
    
    if (localStorage.getItem("wordList")) {
        var wordString = localStorage.getItem("wordList");
        var wordArray = wordString.split("&");
        number = wordArray.length;
    }
    else {
        number = 0;
    }
    
    return number;
}

var round = 0;
var counter = 0;
var wordsLeft = 0;
var correctWords = 0;
var wrongWords = 0;

var wordString;
var wordArray;
var newWordArray;

function showNextWord() {
    if (wordsLeft > 0) {
        var bothWords = wordArray[counter];
        var word = bothWords.split(":");

        document.getElementById("wordToTranslate").innerHTML = word[0];
    }
    else {
        startNewRound();
    }
}

function enterWord() {
    document.getElementById("correctComment").style.display = "none";
    document.getElementById("wrongComment").style.display = "none";
    
    var inputWord = document.getElementById("practiceForm").value;

    var bothWords = wordArray[counter];
    var word = bothWords.split(":");
    var correctWord = word[1];

    if (inputWord.toLowerCase() == correctWord.toLowerCase()) {
        // Displays the "Correct!" message for 1 second
        document.getElementById("correctComment").style.display = "block";
        window.setTimeout(function() {document.getElementById("correctComment").style.display = "none"}, 1000);

        document.getElementById("correctWords").innerHTML = ++correctWords;

        var index = newWordArray.indexOf(bothWords);
        newWordArray.splice(index, 1);
    }
    else {
        // Displays the "Wrong!" message for 1 second
        document.getElementById("correctWordWas").innerHTML = correctWord;
        document.getElementById("wrongComment").style.display = "block";
        window.setTimeout(function() {document.getElementById("wrongComment").style.display = "none"}, 3000);

        document.getElementById("wrongWords").innerHTML = ++wrongWords;
    }

    document.getElementById("wordsLeft").innerHTML = --wordsLeft;
    document.getElementById("practiceForm").value = "";

    counter++;
    showNextWord();
}

function startNewRound() {
    wordArray = newWordArray.slice(0);
    
    counter = 0;
    wordsLeft = wordArray.length;
    correctWords = 0;
    wrongWords = 0;
    
    if (wordsLeft > 0) {
        document.getElementById("wordsLeft").innerHTML = wordsLeft;
        document.getElementById("correctWords").innerHTML = correctWords;
        document.getElementById("wrongWords").innerHTML = wrongWords;
        
        document.getElementById("round").innerHTML = ++round;
        showNextWord();
    }
    else {
        var divNode = document.getElementById("practice");
        while (divNode.firstChild) {
            divNode.removeChild(divNode.firstChild);
        }
        
        var node = document.createElement("P");
        node.setAttribute("class", "word");
        node.innerHTML = "Practice completed!";
        document.getElementById("practice").appendChild(node);
    }
}

function onLoad() {

    if (localStorage.getItem("wordList") !== null) {
        wordString = localStorage.getItem("wordList");
        wordArray = wordString.split("&");
        newWordArray = wordString.split("&");
        
        startNewRound();
    }
    else {
        var divNode = document.getElementById("practice");
        while (divNode.firstChild) {
            divNode.removeChild(divNode.firstChild);
        }
        
        var node = document.createElement("P");
        node.innerHTML = 'The word list is empty. <a class="link" href="/manage">Go add some words!</a>';
        document.getElementById("practice").appendChild(node);
    }
}

onLoad();