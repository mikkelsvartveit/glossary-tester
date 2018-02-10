var round, counter, wordsLeft, correctWords, wrongWords, wordString, wordArray, newWordString, newWordArray;

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
    delete storage.practiceRound;
    delete storage.practiceCounter;
    delete storage.practiceWordList;
    delete storage.practiceNewWordList;
    
    updateStorage();
}

function updateProgressBar() {
    var bar = document.getElementById("practiceProgress");
    
    var totalWords = correctWords + wordsLeft + wrongWords;
    var percent;
    if(correctWords > 0) {
        percent = Math.round(correctWords / totalWords * 100);
    } else {
        percent = 0;
    }
    var oldWidth = Number(bar.style.width.replace(/[^0-9]/g,""));
    var changingWidth = oldWidth;
    
    bar.innerHTML = percent + "%";
    
    frameTime = 300 / (percent - oldWidth);
    var interval = setInterval(frame, frameTime);
    function frame() {
        if (changingWidth >= percent) {
            clearInterval(interval);
        } else {
            changingWidth += 0.5;
            bar.style.width = changingWidth + "%";
        }
    }
}

function showNextWord() {
    if (wordsLeft > 0) {
        var bothWords = wordArray[counter],
            word = bothWords.split("=");

        document.getElementById("wordToTranslate").innerHTML = word[0];
    } else {
        startNewRound();
    }
    
    updateProgressBar();
}

function repeatWord() {
    document.getElementById("practice").style.display = "none";
    document.getElementById("practiceRepeatWord").style.display = "block";

    var bothWords = wordArray[counter],
        word = bothWords.split("=");

    document.getElementById("wordToRepeat").innerHTML = word[1];
    document.getElementById("practiceRepeatForm").focus();
}

function typeRepeatWord() {
    var inputWord = document.getElementById("practiceRepeatForm").value,

        bothWords = wordArray[counter],
        word = bothWords.split("="),
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
        storage.practiceCounter = counter;
        document.getElementById("practiceForm").focus();
        showNextWord();
    }
    updateStorage();
}

function enterWord() {
    document.getElementById("correctComment").style.display = "none";
    document.getElementById("correctRepeatComment").style.display = "none";
    document.getElementById("wrongComment").style.display = "none";

    var inputWord = document.getElementById("practiceForm").value,

        bothWords = wordArray[counter],
        word = bothWords.split("="),
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
        storage.practiceNewWordList = newWordArray.join(";");

        document.getElementById("wordsLeft").innerHTML = --wordsLeft;
        document.getElementById("practiceForm").value = "";

        counter++;
        storage.practiceCounter = counter;
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
    updateStorage();
}

function startNewRound() {
    // Duplicate array
    wordArray = shuffleArray(newWordArray.slice(0));
    newWordArray = wordArray.slice(0);
    storage.practiceWordList = wordArray.join(";");

    counter = 0;
    storage.practiceCounter = counter;
    wordsLeft = wordArray.length;
    wrongWords = 0;

    if (wordsLeft > 0) {
        document.getElementById("wordsLeft").innerHTML = wordsLeft;
        document.getElementById("correctWords").innerHTML = correctWords;
        document.getElementById("wrongWords").innerHTML = wrongWords;

        document.getElementById("round").innerHTML = ++round;
        storage.practiceRound = round;
        showNextWord();
    } else {
        var divNode = document.getElementById("practice");
        while (divNode.firstChild) {
            divNode.removeChild(divNode.firstChild);
        }

        document.getElementById("practiceCompleted").style.display = "block";
        resetPractice();
    }
    updateStorage();
}

function onLoad() {
    function resumePractice() {
        wordString = storage.practiceWordList;
        wordArray = wordString.split(";");
        if (storage.practiceNewWordList) {
            newWordString = storage.practiceNewWordList;
        } else {
            newWordString = storage.practiceWordList;
        }
        newWordArray = newWordString.split(";");

        counter = parseInt(storage.practiceCounter);
        wordsLeft = wordArray.length - counter;
        correctWords = wordArray.length - newWordArray.length;
        wrongWords = counter - correctWords;
        round = parseInt(storage.practiceRound);

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

        wordString = storage.wordList;
        wordArray = shuffleArray(wordString.split(";"));
        newWordArray = wordArray.slice(0);

        startNewRound();
    }

    var lang;
    if (storage.lang2) {
        lang = storage.lang2;
        if (lang === "Other") {
            lang = storage.otherLang2;
        }
        document.getElementById("lang").innerHTML = lang;
    }

    if (storage.practiceCounter) {
        resumePractice();
    } else if (storage.wordList) {
        initializePractice();
    } else {
        document.getElementById("practice").style.display = "none";
        document.getElementById("noWords").style.display = "block";
    }
}

// Event listeners:

document.getElementById("startOverButton").addEventListener("click", function() {
    resetPractice();
    location.reload();
});

document.getElementById("enterWordButton").addEventListener("click", enterWord);

document.getElementById("practiceForm").addEventListener("keydown", function() {
    if (event.keyCode == 13) {
        enterWord();
    }
});

document.getElementById("practiceRepeatForm").addEventListener("input", typeRepeatWord);

onLoad();
