function loadWordList() {
    var tableNode = document.getElementById("wordTable"),
        table = [];

    // Clearing the table before reloading the words
    while (tableNode.childElementCount > 0) {
        tableNode.removeChild(tableNode.lastChild);
    }

    var wordString = importStorage.wordList,
        wordArray = wordString.split(";");

    for (var i = 0; i < wordArray.length; i++) {
        var bothWords = wordArray[i],
            word = bothWords.split("="),
            node = document.createElement("DIV"),
            childNode1 = document.createElement("P"),
            childNode2 = document.createElement("P"),
            childNode3 = document.createElement("P");

        node.className = "wordCard";

        childNode1.innerHTML = word[0];
        // childNode2 includes buttons to edit or delete the word
        childNode2.innerHTML = word[1];

        node.appendChild(childNode1);
        node.appendChild(childNode2);
        node.appendChild(childNode3);

        table.push(node);
    }

    for (var i = 0; i < table.length; i++) {
        tableNode.appendChild(table[i]);
    }
}

loadWordList();

function importNow() {
    storage.wordList = importStorage.wordList;
    storage.lang1 = importStorage.lang1;
    storage.lang2 = importStorage.lang2;
    if(importStorage.otherLang1) {
        storage.otherLang1 = importStorage.otherLang1;
    }
    if(importStorage.otherLang2) {
        storage.otherLang2 = importStorage.otherLang2;
    }
    
    storage.wordListIsModified = true;
    
    updateStorage();
    window.location.href = "/";
}

document.getElementById("importButton").addEventListener("click", function() {
    showOverlay("confirmImportOverlay", true);
});

document.getElementById("confirmImportOverlayYesButton").addEventListener("click", function() {
    importNow();
});

document.getElementById("confirmImportOverlayNoButton").addEventListener("click", function() {
    showOverlay("confirmImportOverlay", false);
});