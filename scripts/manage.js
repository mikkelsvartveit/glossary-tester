// Enter supported languages here, seperated by space
var languages = "English Español Deutsch Français Italiano Nederlands Português Norsk Svenska Dansk عربى हिंदी русский 中文 日本語".split(" ");
languages.sort();

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

// This function clears and reloads the word table, with data from the local storage.
function loadWordList() {
    var tableNode = document.getElementById("table");
    while (tableNode.childElementCount > 1) {
        tableNode.removeChild(tableNode.lastChild);
    }

    if (numberOfWords() > 0) {
        var wordString = localStorage.getItem("wordList"),
            wordArray = wordString.split("&");

        for (var i = 0; i < numberOfWords(); i++) {
            // Get a string with the original word and the translation.
            var bothWords = wordArray[i],
                // Create an array where [0] is the original word and [1] is the translation.
                word = bothWords.split(":"),
                // Create a new <tr> element (row) with the words and add it to the table
                node = document.createElement("TR"),
                str = '<td>' + word[0] + '</td><td><button class="deleteWordButton" onclick="deleteWord(' + i + ')"><i class="material-icons md-dark">delete</i></button>' + word[1] + '</td>';
                node.innerHTML = str;
            document.getElementById("table").appendChild(node);
        }
    }
}

function loadLanguages() {

    for (var i = 0; i < languages.length; i++) {
        var node = document.createElement("OPTION"),
            otherElement = document.getElementById("other1");
        node.setAttribute("value", languages[i]);
        node.innerHTML = languages[i];
        otherElement.parentNode.insertBefore(node, otherElement);
    }

    for (var i = 0; i < languages.length; i++) {
        var node = document.createElement("OPTION"),
            otherElement = document.getElementById("other2");
        node.setAttribute("value", languages[i]);
        node.innerHTML = languages[i];
        otherElement.parentNode.insertBefore(node, otherElement);
    }

    if (localStorage.getItem("lang1")) {
        var lang = localStorage.getItem("lang1");
        var otherLang;

        if (lang == "Other") {
            otherLang = localStorage.getItem("otherLang1");
            node = document.createElement("OPTION");
            node.innerHTML = otherLang;
            node.setAttribute("value", otherLang);
            document.getElementById("langSelect1").appendChild(node);

            document.getElementById("language1").setAttribute("placeholder", otherLang);
            document.getElementById("langSelect1").value = otherLang;
        } else {
            document.getElementById("langSelect1").value = lang;
            document.getElementById("language1").setAttribute("placeholder", lang);
        }
    }

    if (localStorage.getItem("lang2")) {
        var lang = localStorage.getItem("lang2");
        var otherLang;

        if (lang == "Other") {
            otherLang = localStorage.getItem("otherLang2");
            node = document.createElement("OPTION");
            node.innerHTML = otherLang;
            node.setAttribute("value", otherLang);
            document.getElementById("langSelect2").appendChild(node);

            document.getElementById("language2").setAttribute("placeholder", otherLang);
            document.getElementById("langSelect2").value = otherLang;
        } else {
            document.getElementById("langSelect2").value = lang;
            document.getElementById("language2").setAttribute("placeholder", lang);
        }
    }
}

function changeLanguage(languageToChange) {
    if (languageToChange == 1) {
        var lang = document.getElementById("langSelect1").value;
        localStorage.setItem("lang1", lang);

        if (lang == "Other") {
            var otherLang = prompt("Type in your language:");
            localStorage.setItem("otherLang1", otherLang);

            otherLang = localStorage.getItem("otherLang1");
            node = document.createElement("OPTION");
            node.innerHTML = otherLang;
            node.setAttribute("value", otherLang);
            document.getElementById("langSelect1").appendChild(node);

            document.getElementById("language1").setAttribute("placeholder", otherLang);
            document.getElementById("langSelect1").value = otherLang;
        } else {
            document.getElementById("langSelect1").value = lang;
            document.getElementById("language1").setAttribute("placeholder", lang);
        }
    } else if (languageToChange == 2) {
        var lang = document.getElementById("langSelect2").value;
        localStorage.setItem("lang2", lang);

        if (lang == "Other") {
            var otherLang = prompt("Type in your language:");
            localStorage.setItem("otherLang2", otherLang);

            otherLang = localStorage.getItem("otherLang2");
            node = document.createElement("OPTION");
            node.innerHTML = otherLang;
            node.setAttribute("value", otherLang);
            document.getElementById("langSelect2").appendChild(node);

            document.getElementById("language2").setAttribute("placeholder", otherLang);
            document.getElementById("langSelect2").value = otherLang;
        } else {
            document.getElementById("langSelect2").value = lang;
            document.getElementById("language2").setAttribute("placeholder", lang);
        }
    }
}

// This function runs when the user clicks the "Add word" button
function addWord() {
    function addWordToLocalStorage(firstWord, secondWord) {
        var wordString, newWordString;
        if (localStorage.getItem("wordList")) {
            wordString = localStorage.getItem("wordList");
            newWordString = wordString + "&" + firstWord + ":" + secondWord;
        } else {
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
        } else {
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

// Load the word table and language list when the page loads
loadLanguages();
loadWordList();
