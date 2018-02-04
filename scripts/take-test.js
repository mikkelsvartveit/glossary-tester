// Function for inserting an HTML element after another
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function showNewTest() {
    if (numberOfWords() > 0) {
        var wordString = storage.wordList,
            wordArray = wordString.split(";");

        document.getElementById("submitTest").style.display = "block";

        for (var i = 0; i < numberOfWords(); i++) {
            var cloneNode = document.getElementById("sampleElement").cloneNode(true),

                wordNode = cloneNode.getElementsByClassName("word1")[0],
                langNode = cloneNode.getElementsByClassName("lang")[0],
                inputNode = cloneNode.getElementsByClassName("input")[0],

                bothWords = wordArray[i],
                word = bothWords.split("=");

            if (storage.lang2) {
                var lang = storage.lang2;
                if (lang == "Other") {
                    lang = storage.otherLang2;
                }
                langNode.innerHTML = lang;
            }

            cloneNode.style.display = "block";

            wordNode.innerHTML = word[0];
            inputNode.setAttribute("id", i);

            document.getElementById("takeTest").appendChild(cloneNode);
        }
    } else {
        document.getElementById("noWords").style.display = "block";
    }
}

function submitTest() {
    var answerArray = [];
    for (var i = 0; i < numberOfWords(); i++) {
        answerArray[i] = document.getElementById(i).value;
    }
    storage.lastTestAnswers = answerArray.join(";");

    var correctArray = [],
        wordString = storage.wordList,
        wordArray = wordString.split(";");
    for (var i = 0; i < numberOfWords(); i++) {
        bothWords = wordArray[i].split("=");
        correctArray[i] = bothWords[1];
    }

    var numberOfCorrectWords = 0,
        isCorrect = [];

    for (var i = 0; i < numberOfWords(); i++) {
        if (answerArray[i].trim().toLowerCase() == correctArray[i].toLowerCase()) {
            numberOfCorrectWords++;
        }
    }
    
    var scoreString = numberOfCorrectWords + "/" + numberOfWords();

    storage.lastTestScore = scoreString;
    storage.lastTestWordList = storage.wordList;
    
    updateStorage();

    // Redirects to results page after submitting test
    window.location.href = "/tests/result";
}

document.getElementById("submitTest").addEventListener("click", submitTest);

showNewTest();
