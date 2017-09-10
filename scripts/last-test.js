function showLastResult() {
    var wordString = localStorage.getItem("lastTestWordList"),
        wordListArray = wordString.split("&"),

        numberOfWords = wordListArray.length,

        translationArray = [],
        correctArray = [];
    for (var i = 0; i < numberOfWords; i++) {
        bothWords = wordListArray[i].split(":");
        translationArray[i] = bothWords[0];
        correctArray[i] = bothWords[1];
    }

    var answerString = localStorage.getItem("lastTestAnswers"),
        answerArray = answerString.split(","),
        numberOfCorrectWords = 0;

    for (i = 0; i < numberOfWords; i++) {
        var cloneNode = document.getElementById("sampleElement").cloneNode(true),
            originalWordNode = cloneNode.getElementsByClassName("originalWord")[0],
            answerNode = cloneNode.getElementsByClassName("answer")[0];

        originalWordNode.innerHTML = translationArray[i];
        answerNode.innerHTML = answerArray[i];

        if (answerArray[i].toLowerCase() == correctArray[i].toLowerCase()) {
            answerNode.setAttribute("class", "answer correct");
            numberOfCorrectWords++;
        } else {
            answerNode.setAttribute("class", "answer false");
            var correctCommentNode = cloneNode.getElementsByClassName("correctComment")[0],
                correctWordNode = cloneNode.getElementsByClassName("correctWord")[0];

            correctCommentNode.style.display = "inline";
            correctWordNode.innerHTML = correctArray[i];
        }

        cloneNode.style.display = "block";
        document.getElementById("testResult").appendChild(cloneNode);
    }

    document.getElementById("correctWords").innerHTML = numberOfCorrectWords;
    document.getElementById("totalWords").innerHTML = numberOfWords;
}

showLastResult();
