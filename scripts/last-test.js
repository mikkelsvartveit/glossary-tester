function showLastResult() {
    var wordString = storage.lastTestWordList,
        wordListArray = wordString.split(";"),

        numberOfWords = wordListArray.length,

        translationArray = [],
        correctArray = [];
    for (var i = 0; i < numberOfWords; i++) {
        bothWords = wordListArray[i].split("=");
        translationArray[i] = bothWords[0];
        correctArray[i] = bothWords[1];
    }

    var answerString = storage.lastTestAnswers,
        answerArray = answerString.split(";"),
        numberOfCorrectWords = 0;

    for (i = 0; i < numberOfWords; i++) {
        // Clones an invisible sample element from the HTML file
        var cloneNode = document.getElementById("sampleElement").cloneNode(true),
            originalWordNode = cloneNode.getElementsByClassName("originalWord")[0],
            answerNode = cloneNode.getElementsByClassName("answer")[0];

        originalWordNode.innerHTML = translationArray[i];
        answerNode.innerHTML = answerArray[i];

        if (answerArray[i].trim().toLowerCase() == correctArray[i].toLowerCase()) {
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
    
    var percentageCorrect = (numberOfCorrectWords / numberOfWords) * 100;
    
    var grade;
    if (percentageCorrect >= 97) {
        grade = "A+";
    } else if (percentageCorrect >= 93) {
        grade = "A";
    } else if (percentageCorrect >= 90) {
        grade = "A-";
    } else if (percentageCorrect >= 87) {
        grade = "B+";
    } else if (percentageCorrect >= 83) {
        grade = "B";
    } else if (percentageCorrect >= 80) {
        grade = "B-";
    } else if (percentageCorrect >= 77) {
        grade = "C+";
    } else if (percentageCorrect >= 73) {
        grade = "C";
    } else if (percentageCorrect >= 70) {
        grade = "C-";
    } else if (percentageCorrect >= 67) {
        grade = "D+";
    } else if (percentageCorrect >= 63) {
        grade = "D";
    } else if (percentageCorrect >= 60) {
        grade = "D-";
    } else {
        grade = "F";
    }
    
    document.getElementById("testGrade").innerHTML = grade;
            
}

showLastResult();
