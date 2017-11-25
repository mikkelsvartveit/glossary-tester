// Enter supported languages here, seperated by space:
var languages = "English Español Deutsch Français Italiano Nederlands Português Norsk Svenska Dansk عربى हिंदी русский 中文 日本語".split(" ");
languages.sort();

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

function loadWordList() {
    var tableNode = document.getElementById("table");
    // Clearing the table before reloading the words
    while (tableNode.childElementCount > 1) {
        tableNode.removeChild(tableNode.lastChild);
    }

    if (numberOfWords() > 0) {
        var wordString = localStorage.getItem("wordList"),
            wordArray = wordString.split("&");

        for (var i = 0; i < numberOfWords(); i++) {
            var bothWords = wordArray[i],
                word = bothWords.split(":"),
                node = document.createElement("TR"),
                childNode1 = document.createElement("TD"),
                childNode2 = document.createElement("TD");

            childNode1.innerHTML = word[0];
            // childNode2 includes a button to delete the word
            childNode2.innerHTML = '<button type="button" class="deleteWordButton" onclick="deleteWord(' + i + ')"><i class="material-icons md-dark">&#xE872;</i></button><button type="button" class="deleteWordButton" onclick="editWord(' + i + ')"><i class="material-icons md-dark">&#xE3C9;</i></button>' + word[1];

            node.appendChild(childNode1);
            node.appendChild(childNode2);

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

    function checkLegal(word1, word2) {
        var array = [word1.split(""), word2.split("")];

        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                if (array[i][j] == "&" || array[i][j] == ":") {
                    return false;
                }
            }
        }
        return true;
    }

    var word1, word2;

    // If any of the text fields are empty, display an error message
    if (document.getElementById("language1").value == "" || document.getElementById("language2").value == "") {
        showOverlay("noInputOverlay", true);
    } else if (checkLegal(document.getElementById("language1").value, document.getElementById("language2").value)){
        word1 = document.getElementById("language1").value;
        word2 = document.getElementById("language2").value;

        addWordToLocalStorage(word1, word2);
        loadWordList();

        // Empty text fields and set focus to first text field after entering a word
        document.getElementById("language1").value = "";
        document.getElementById("language2").value = "";
        document.getElementById("language1").focus();
    } else {
        showOverlay("illegalCharacterOverlay", true);
    }
}

function showOverlay(id, show) {
    if(show) {
        document.getElementById("dim").className = "dim dim-show";
        
        document.getElementById(id).className = "overlay";
        setTimeout(function() {document.getElementById(id).className = "overlay overlay-show"}, 50);
    } else {
        document.getElementById(id).className = "overlay";
        setTimeout(function() {document.getElementById(id).className = "overlay hidden"}, 300);
        
        document.getElementById("dim").className = "dim";
    }
}

function sortWords(order) {
    
}

function editWord(index) {
    loadWordList();
    
    var wordString, wordArray, wordToEdit, newWord, newWordList, rowNode, tempNode;
    
    wordString = localStorage.getItem("wordList");
    wordArray = wordString.split("&");
    wordToEdit = wordArray[index].split(":");
    
    rowNode = document.getElementById("table").children[index+1];
    
    // This is extremely ugly and unreadable, but it's the best way to make it work in IE9
    tempNode = document.createElement("DIV");
    tempNode.innerHTML = '<table><td><input type="text" class="table-input" id="edit1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onKeyDown="if(event.keyCode==13) acceptEditedWord(' + index + ');" value="' + wordToEdit[0] + '"></td><td><input type="text" class="table-input" id="edit2" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onKeyDown="if(event.keyCode==13) acceptEditedWord(' + index + ');" value="' + wordToEdit[1] + '"><button type="button" onclick="acceptEditedWord(' + index + ')" class="deleteWordButton"><i class="material-icons md-dark">&#xE5CA;</i></button><button type="button" onclick="loadWordList();" class="deleteWordButton"><i class="material-icons md-dark">&#xE14C;</i></button></td></table>';
    
    rowNode.parentNode.replaceChild(tempNode.firstChild.firstChild, rowNode);
}

function acceptEditedWord(index) {
    var wordString, wordArray, wordToEdit, newWord, newWordString, rowNode;
    
    wordString = localStorage.getItem("wordList");
    wordArray = wordString.split("&");
    wordToEdit = wordArray[index];
    
    var edit1 = document.getElementById("edit1").value,
        edit2 = document.getElementById("edit2").value;
    
    if (edit1 == "" || edit2 == "") {
        showOverlay("noInputOverlay", true);
    } else {
        var newWord = edit1 + ":" + edit2;

        newWordString = wordString.replace(wordToEdit, newWord);
        localStorage.setItem("wordList", newWordString);

        loadWordList();
    }
}

function deleteWord(index) {
    // If the user deletes the only word in the list, delete the whole cookie
    if (numberOfWords() == 1) {
        localStorage.removeItem("wordList");
    } else {
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

function deleteAllWords(prompt) {
    if(prompt) {
        localStorage.removeItem("wordList");
        loadWordList();
    }
    
    showOverlay("clearOverlay", false);
}

// Load the word table and language list when the page loads
loadLanguages();
loadWordList();
