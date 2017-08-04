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
    
    for (i = 0; i < numberOfWords; i++) {
        var cloneNode = document.getElementById("sampleElement").cloneNode(true);
        var originalWordNode = cloneNode.getElementsByClassName("originalWord")[0];
        var answerNode = cloneNode.getElementsByClassName("answer")[0];
        
        originalWordNode.innerHTML = translationArray[i];
        answerNode.innerHTML = answerArray[i];
        
        if(answerArray[i].toLowerCase() == correctArray[i].toLowerCase()) {
            answerNode.setAttribute("class", "answer correct");
            numberOfCorrectWords++;
        }
        else {
            answerNode.setAttribute("class", "answer false");
            var correctCommentNode = cloneNode.getElementsByClassName("correctComment")[0];
            var correctWordNode = cloneNode.getElementsByClassName("correctWord")[0];
            
            correctCommentNode.style.display = "block";
            correctWordNode.innerHTML = correctArray[i];
        }
        
        cloneNode.style.display = "block";
        document.getElementById("testResult").appendChild(cloneNode);
    }
    
    document.getElementById("correctWords").innerHTML = numberOfCorrectWords;
    document.getElementById("totalWords").innerHTML = numberOfWords;
    
    var percentageCorrect = (numberOfCorrectWords / numberOfWords) * 100;
    var comment;
    
    if (percentageCorrect == 100) {
        comment = document.getElementById("100percent");
    }
    else if (percentageCorrect >= 75) {
        comment = document.getElementById("75plus");
    }
    else if (percentageCorrect >= 50) {
        comment = document.getElementById("50plus");
    }
    else if (percentageCorrect >= 30){
        comment = document.getElementById("30plus");
    }
    else {
        comment = document.getElementById("under30");
    }
    
    comment.style.display = "block";
}

showLastResult();