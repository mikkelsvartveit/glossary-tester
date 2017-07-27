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

// Function for inserting an HTML element after another
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function showNewTest() {
    if (numberOfWords() > 0) {
        var wordString = localStorage.getItem("wordList");
        // Create an array with all the words.
        var wordArray = wordString.split("&");

        for (var i = 0; i < numberOfWords(); i++) {
            var node = document.createElement("P");

            var bothWords = wordArray[i];
            var word = bothWords.split(":");
            
            var lang;
            if (localStorage.getItem("lang2")) {
                lang = localStorage.getItem("lang2");
                if (lang == "Other") {
                    lang = localStorage.getItem("otherLang2");
                }
            }
            else {
                lang = "your learning language";
            }
            
            var str = 'Übersetzen <strong>' + word[0] + '</strong> auf <span>' + lang + '</span><br><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="' + i + '">';

            node.innerHTML = str;
            document.getElementById("takeTest").appendChild(node);
        }
        
        var buttonNode = document.createElement("BUTTON");
        buttonNode.setAttribute("onclick", "submitTest()");
        buttonNode.innerHTML = "Submit test";
        document.getElementById("takeTest").appendChild(buttonNode);
    }
    else {
        var node = document.createElement("P");
        var str = 'Das Wort Liste ist leer. Go <a class="link" href="/manage">here</a> fügen Sie einige Worte!';
        node.innerHTML = str;
        document.getElementById("takeTest").appendChild(node);
    }
}

function submitTest() {
    var answerArray = [];
    for (var i = 0; i < numberOfWords(); i++) {
        answerArray[i] = document.getElementById(i).value;
    }
    localStorage.setItem("lastTestAnswers", answerArray.toString());
    
    var correctArray = [];
    var wordString = localStorage.getItem("wordList");
    var wordArray = wordString.split("&");
    for (var i = 0; i < numberOfWords(); i++) {
        bothWords = wordArray[i].split(":");
        correctArray[i] = bothWords[1];
    }
    
    var numberOfCorrectWords = 0;
    var isCorrect = [];
    
    for (var i = 0; i < numberOfWords(); i++) {
        
        if (answerArray[i].toLowerCase() == correctArray[i].toLowerCase()) {
            numberOfCorrectWords++;
            isCorrect[i] = true;
        }
        else {
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