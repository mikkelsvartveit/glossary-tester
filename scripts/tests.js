function showLastTestResult() {
    if (storage.lastTestScore) {
        var resultArray = storage.lastTestScore.split("/"),
            correctWords = resultArray[0],
            totalWords = resultArray[1];

        document.getElementById("correctWords").innerHTML = correctWords;
        document.getElementById("totalWords").innerHTML = totalWords;

        document.getElementById("lastTestComment").style.display = "block";
    } else {
        document.getElementById("noTestComment").style.display = "block";
    }
}

showLastTestResult();
