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

function showLastTestResult() {
    var node = document.createElement("P"),
        resultComment = "";
    if (localStorage.getItem("lastTestScore")) {
        var resultArray = localStorage.getItem("lastTestScore").split("/"),
            correctWords = resultArray[0],
            totalWords = resultArray[1];

        document.getElementById("correctWords").innerHTML = correctWords;
        document.getElementById("totalWords").innerHTML = totalWords;

        document.getElementById("lastTestComment").style.display = "block";
    } else {
        document.getElementById("noTestComment").style.display = "block";
    }

    node.innerHTML = resultComment;
    document.getElementById("lastResult").appendChild(node);
}

showLastTestResult();
