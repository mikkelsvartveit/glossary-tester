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

function showLastTestResult() {
    var node = document.createElement("P");
    var resultComment = "";
    if (localStorage.getItem("lastTestScore")) {
        resultArray = localStorage.getItem("lastTestScore").split("/");
        var correctWords = resultArray[0];
        var totalWords = resultArray[1];
        
        resultComment = 'In your last test, you got ' + correctWords + ' of ' + totalWords + ' words right. <a href="/tests/last-test" class="link">Show details</a>.';
    }
    else {
        resultComment = 'You have not completed any tests yet. When you take a test, the result will show up here.';
    }
    
    node.innerHTML = resultComment;
    document.getElementById("lastResult").appendChild(node);
}

showLastTestResult();