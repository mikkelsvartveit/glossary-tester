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

function shuffleArray(array) {
    var newArray = [];
    for (var i = array.length; i > 0; i--) {
        var random = Math.floor(Math.random()*i);
        newArray.push(array[random]);
        array.splice(random, 1);
    }
    return newArray;
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

function repeatWord() {
    document.getElementById("practice").style.display = "none";
    document.getElementById("practiceRepeatWord").style.display = "block";

    var bothWords = wordArray[counter],
        word = bothWords.split(":");

    document.getElementById("wordToRepeat").innerHTML = word[1];
    document.getElementById("practiceRepeatForm").focus();
}

function typeRepeatWord() {
    var inputWord = document.getElementById("practiceRepeatForm").value,

        bothWords = wordArray[counter],
        word = bothWords.split(":"),
        correctWord = word[1];

    if(inputWord.toLowerCase() === correctWord.toLowerCase()) {
        document.getElementById("wordsLeft").innerHTML = --wordsLeft;
        document.getElementById("practiceRepeatForm").value = "";
        document.getElementById("practiceForm").value = "";

        document.getElementById("practiceRepeatWord").style.display = "none";
        document.getElementById("wrongComment").style.display = "none";
        document.getElementById("practice").style.display = "block";

        document.getElementById("correctRepeatComment").style.display = "block";
        window.setTimeout(function () {
            document.getElementById("correctRepeatComment").style.display = "none";
        }, 1000);

        counter++;
        localStorage.setItem("practiceCounter", counter);
        document.getElementById("practiceForm").focus();
        showNextWord();
    }
}

function enterWord() {
    document.getElementById("correctComment").style.display = "none";
    document.getElementById("correctRepeatComment").style.display = "none";
    document.getElementById("wrongComment").style.display = "none";

    var inputWord = document.getElementById("practiceForm").value,

        bothWords = wordArray[counter],
        word = bothWords.split(":"),
        wordToTranslate = word[0],
        correctWord = word[1];

    if (inputWord.trim().toLowerCase() === correctWord.toLowerCase()) {
        // Displays the "Correct!" message for 1 second
        document.getElementById("correctComment").style.display = "block";
        window.setTimeout(function () {
            document.getElementById("correctComment").style.display = "none";
        }, 1000);

        document.getElementById("correctWords").innerHTML = ++correctWords;

        var index = newWordArray.indexOf(bothWords);
        newWordArray.splice(index, 1);
        localStorage.setItem("practiceNewWordList", newWordArray.join("&"));

        document.getElementById("wordsLeft").innerHTML = --wordsLeft;
        document.getElementById("practiceForm").value = "";

        counter++;
        localStorage.setItem("practiceCounter", counter);
        document.getElementById("practiceForm").focus();
        showNextWord();

    } else {
        // Displays the "Wrong!" message for 3 seconds
        document.getElementById("wordToTranslateWas").innerHTML = wordToTranslate;
        document.getElementById("correctWordWas").innerHTML = correctWord;

        document.getElementById("wrongComment").style.display = "block";
        document.getElementById("wrongWords").innerHTML = ++wrongWords;

        repeatWord();
    }
}

function startNewRound() {
    // Duplicate array
    wordArray = shuffleArray(newWordArray.slice(0));
    newWordArray = wordArray.slice(0);
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
        wordArray = shuffleArray(wordString.split("&"));
        newWordArray = wordArray.slice(0);

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
