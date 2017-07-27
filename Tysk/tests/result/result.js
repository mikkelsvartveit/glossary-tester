function showLastResult() {
    var wordString = localStorage.getItem("lastTestWordList");
    var wordListArray = wordString.split("&");
    
    var numberOfWords = wordListArray.length;
    
    var translationArray = [];
    var correctArray = [];
    for (var i = 0; i < numberOfWords; i++) {
        bothWords = wordListArray[i].split(":");
        translationArray[i] = bothWords[0];
        correctArray[i] = bothWords[1];
    }
    
    var answerString = localStorage.getItem("lastTestAnswers");
    var answerArray = answerString.split(",");
    var numberOfCorrectWords = 0;
    
    for (i = 0; i < correctArray.length; i++) {
        var node = document.createElement("P");
        
        if (answerArray[i].toLowerCase() == correctArray[i].toLowerCase()) {
            node.innerHTML = translationArray[i] + ' = <b class="correct">' + correctArray[i] + '</b>';
            numberOfCorrectWords++;
            
        }
        else {
            node.innerHTML = translationArray[i] + ' = <b class="false">' + answerArray[i] + '</b> (correct answer was <b>' + correctArray[i] + '</b>)';
        }
        
        document.getElementById("testResult").appendChild(node);
    }
    
    var percentageCorrect = (numberOfCorrectWords / numberOfWords) * 100;
    
    var node = document.createElement("P");
    var resultComment;
    
    if (percentageCorrect == 100) {
        resultComment = "Wow, great job! You got all of your words right!";
    }
    else if (percentageCorrect >= 75) {
        resultComment = "Well done! You got " + numberOfCorrectWords + " of " + numberOfWords + " words right.";
    }
    else if (percentageCorrect >= 50) {
        resultComment = "Not bad. You got " + numberOfCorrectWords + " of " + numberOfWords + " words right.";
    }
    else if (percentageCorrect >= 30){
        resultComment = "Go practice some more. You got " + numberOfCorrectWords + " of " + numberOfWords + " words right.";
    }
    else {
        resultComment = "Ouch! You got " + numberOfCorrectWords + " of " + numberOfWords + " words right.";
    }
    
    node.innerHTML = resultComment;
    document.getElementById("testScore").appendChild(node);
}

showLastResult();