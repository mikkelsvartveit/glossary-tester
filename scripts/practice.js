var round, counter, wordsLeft, correctWords, wrongWords, wordString, wordArray, newWordString, newWordArray;

function numberOfWords() {
    var number;

    if (localStorage.getItem("wordList")) {
        var wordString = localStorage.getItem("wordList"),
            wordArray = wordString.split("&");
        number = wordArray.length;
    } else {
        number = 0;
    }

    return number;
}

function resetPractice() {
    localStorage.removeItem("practiceRound");
    localStorage.removeItem("practiceCounter");
    localStorage.removeItem("practiceWordList");
    localStorage.removeItem("practiceNewWordList");
}

function startOver() {
    resetPractice();
    location.reload();
}

function showNextWord() {
    if (wordsLeft > 0) {
        var bothWords = wordArray[counter],
            word = bothWords.split(":");

        document.getElementById("wordToTranslate").innerHTML = word[0];
    } else {
        startNewRound();
    }
}

function enterWord() {
    document.getElementById("correctComment").style.display = "none";
    document.getElementById("wrongComment").style.display = "none";

    var inputWord = document.getElementById("practiceForm").value,

        bothWords = wordArray[counter],
        word = bothWords.split(":"),
        correctWord = word[1];

    if (inputWord.toLowerCase() === correctWord.toLowerCase()) {
        // Displays the "Correct!" message for 1 second
        document.getElementById("correctComment").style.display = "block";
        window.setTimeout(function () {
            document.getElementById("correctComment").style.display = "none";
        }, 1000);

        document.getElementById("correctWords").innerHTML = ++correctWords;

        var index = newWordArray.indexOf(bothWords);
        newWordArray.splice(index, 1);
        localStorage.setItem("practiceNewWordList", newWordArray.join("&"));
        
    } else {
        // Displays the "Wrong!" message for 3 seconds
        document.getElementById("correctWordWas").innerHTML = correctWord;
        document.getElementById("wrongComment").style.display = "block";
        window.setTimeout(function () {
            document.getElementById("wrongComment").style.display = "none";
        }, 3000);

        document.getElementById("wrongWords").innerHTML = ++wrongWords;
    }

    document.getElementById("wordsLeft").innerHTML = --wordsLeft;
    document.getElementById("practiceForm").value = "";

    counter++;
    localStorage.setItem("practiceCounter", counter);
    showNextWord();
}

function startNewRound() {
    wordArray = newWordArray.slice(0);
    localStorage.setItem("practiceWordList", wordArray.join("&"));

    counter = 0;
    localStorage.setItem("practiceCounter", counter);
    wordsLeft = wordArray.length;
    wrongWords = 0;

    if (wordsLeft > 0) {
        document.getElementById("wordsLeft").innerHTML = wordsLeft;
        document.getElementById("correctWords").innerHTML = correctWords;
        document.getElementById("wrongWords").innerHTML = wrongWords;

        document.getElementById("round").innerHTML = ++round;
        localStorage.setItem("practiceRound", round);
        showNextWord();
    } else {
        var divNode = document.getElementById("practice");
        while (divNode.firstChild) {
            divNode.removeChild(divNode.firstChild);
        }

        document.getElementById("practiceCompleted").style.display = "block";
        resetPractice();
    }
}

function onLoad() {
    function resumePractice() {
        wordString = localStorage.getItem("practiceWordList");
        wordArray = wordString.split("&");
        if (localStorage.getItem("practiceNewWordList")) {
            newWordString = localStorage.getItem("practiceNewWordList");
        } else {
            newWordString = localStorage.getItem("practiceWordList");
        }
        newWordArray = newWordString.split("&");

        counter = parseInt(localStorage.getItem("practiceCounter"));
        wordsLeft = wordArray.length - counter;
        correctWords = wordArray.length - newWordArray.length;
        wrongWords = counter - correctWords;
        round = parseInt(localStorage.getItem("practiceRound"));

        document.getElementById("wordsLeft").innerHTML = wordsLeft;
        document.getElementById("correctWords").innerHTML = correctWords;
        document.getElementById("wrongWords").innerHTML = wrongWords;
        document.getElementById("round").innerHTML = round;

        showNextWord();
    }
    
    function initializePractice() {
        round = 0;
        counter = 0;
        wordsLeft = 0;
        correctWords = 0;
        wrongWords = 0;
        
        wordString = localStorage.getItem("wordList");
        wordArray = wordString.split("&");
        newWordArray = wordString.split("&");

        startNewRound();
    }

    var lang;
    if (localStorage.getItem("lang2")) {
        lang = localStorage.getItem("lang2");
        if (lang === "Other") {
            lang = localStorage.getItem("otherLang2");
        }
        document.getElementById("lang").innerHTML = lang;
    }
    
    if (localStorage.getItem("practiceCounter")) {
        resumePractice();
    } else if (localStorage.getItem("wordList")) {
        initializePractice();
    } else {
        document.getElementById("practice").style.display = "none";
        document.getElementById("noWords").style.display = "block";
    }
}

onLoad();
