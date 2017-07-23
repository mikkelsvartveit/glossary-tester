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

// This function clears and reloads the word table, with data from the local storage
function loadWordList() {
    var tableNode = document.getElementById("table");
    while (tableNode.firstChild) {
        tableNode.removeChild(tableNode.firstChild);
    }
    
    if (numberOfWords() > 0) {
        var languageNode = document.createElement("TR");
        languageNode.innerHTML = "<th>Norwegian</th><th>English</th>"
        tableNode.appendChild(languageNode);

        var wordString = localStorage.getItem("wordList");
        var wordArray = wordString.split("&");

        for (var i = 0; i < numberOfWords(); i++) {
            var bothWords, word, node, str;
            // Get a string with the original word and the translation.
            bothWords = wordArray[i];
            // Create an array where [0] is the original word and [1] is the translation.
            word = bothWords.split(":");
            // Create a new <tr> element (row) with the words and add it to the table
            node = document.createElement("TR");
            str = '<td>' + word[0] + '</td><td>' + word[1] + '<button class="deleteWordButton max-scale" onclick="deleteWord(' + i + ')">x</button></td>';
            node.innerHTML = str;
            document.getElementById("table").appendChild(node);
        }
    }
    else {
        node = document.createElement("P");
        node.innerHTML = "The word list is empty. Go add some words!";
        document.getElementById("table").appendChild(node);
    }
}

// This function runs when the user clicks the "Add word" button
function addWord() {
    function addWordToLocalStorage(firstWord, secondWord) {
        var wordString, newWordString;
        if (localStorage.getItem("wordList")) {
            wordString = localStorage.getItem("wordList");
            newWordString = wordString + "&" + firstWord + ":" + secondWord;
        }
        else {
            newWordString = firstWord + ":" + secondWord;
        }
        
        localStorage.setItem("wordList", newWordString);
    }
    
    var word1, word2;
    
    // If any of the text fields are empty, display an error message
    if (document.getElementById("language1").value == "" || document.getElementById("language2").value == "") {
        window.alert("Enter a word in both text fields!");
    }
    
    // Else, add the inputted word to the word list
    else {
        word1 = document.getElementById("language1").value;
        word2 = document.getElementById("language2").value;

        // Add the word to the local storage and reload the word table.
        addWordToLocalStorage(word1, word2);
        loadWordList();

        // Empty text fields and set focus to first text field after entering a word
        document.getElementById("language1").value = "";
        document.getElementById("language2").value = "";
        document.getElementById("language1").focus();
    }
}

// This function runs when the user clicks one of the red buttons next to a word
function deleteWord(index) {
    // If the user deletes the only word in the list, delete the whole cookie
    if (numberOfWords() == 1) {
        localStorage.removeItem("wordList");
    }
    // Else, remove the word from the cookie
    else {
        var wordString, wordArray, wordToDelete;
        
        wordString = localStorage.getItem("wordList");
        wordArray = wordString.split("&");
        
        if (index == 0) {
            wordToDelete = wordArray[index] + "&";
        }
        else {
            wordToDelete = "&" + wordArray[index];
        }
        
        // Update the cookie without the deleted word
        var newWordString = wordString.replace(wordToDelete, "");
        localStorage.setItem("wordList", newWordString);
    }
    
    loadWordList();
}

// This function runs when the user clicks the "Clear word list" button
function deleteAllWords() {
    var prompt = confirm("Are you sure you want to delete all the words?");
    
    if (prompt == true) {
        localStorage.removeItem("wordList");
        loadWordList();
    }
}

function showCookies() {
    alert(localStorage.wordList);
}

// Load the word table when the page loads
loadWordList();