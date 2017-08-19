// This function returns the total number of words in the list
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

// Function for inserting an HTML element after another
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function showNewTest() {
    if (numberOfWords() > 0) {
        var wordString = localStorage.getItem("wordList"),
            // Create an array with all the words.
            wordArray = wordString.split("&");

        document.getElementById("submitTest").style.display = "block";

        for (var i = 0; i < numberOfWords(); i++) {
            var cloneNode = document.getElementById("sampleElement").cloneNode(true),

                wordNode = cloneNode.getElementsByClassName("word1")[0],
                langNode = cloneNode.getElementsByClassName("lang")[0],
                inputNode = cloneNode.getElementsByClassName("input")[0],

                bothWords = wordArray[i],
                word = bothWords.split(":");

            if (localStorage.getItem("lang2")) {
                var lang = localStorage.getItem("lang2");
                if (lang == "Other") {
                    lang = localStorage.getItem("otherLang2");
                }
            }

            cloneNode.style.display = "block";

            wordNode.innerHTML = word[0];
            langNode.innerHTML = lang;
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
    localStorage.setItem("lastTestAnswers", answerArray.toString());

    var correctArray = [],
        wordString = localStorage.getItem("wordList"),
        wordArray = wordString.split("&");
    for (var i = 0; i < numberOfWords(); i++) {
        bothWords = wordArray[i].split(":");
        correctArray[i] = bothWords[1];
    }

    var numberOfCorrectWords = 0,
        isCorrect = [];

    for (var i = 0; i < numberOfWords(); i++) {

        if (answerArray[i].toLowerCase() == correctArray[i].toLowerCase()) {
            numberOfCorrectWords++;
            isCorrect[i] = true;
        } else {
            isCorrect[i] = false;
        }

    }
    var scoreString = numberOfCorrectWords + "/" + numberOfWords();

    localStorage.setItem("lastTestScore", scoreString);
    localStorage.setItem("lastTestResult", isCorrect.toString());
    localStorage.setItem("lastTestWordList", localStorage.getItem("wordList"));

    window.location.href = "/tests/result";
}

showNewTest();
