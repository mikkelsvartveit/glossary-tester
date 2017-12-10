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
    var tableNode = document.getElementById("table"),
        table = [],
        sortedTable = [];
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
            // childNode2 includes buttons to edit or delete the word
            childNode2.innerHTML = '<button type="button" class="deleteWordButton" onclick="deleteWord(' + i + ')"><i class="material-icons md-dark">&#xE872;</i></button><button type="button" class="deleteWordButton" onclick="editWord(this, ' + i + ')"><i class="material-icons md-dark">&#xE3C9;</i></button>' + word[1];

            node.appendChild(childNode1);
            node.appendChild(childNode2);

            table.push(node);
        }
        
        switch (localStorage.getItem("sort")) {
            case "alpha1":
                var tempArray = [];
                for (var i = 0; i < table.length; i++) {
                    tempArray[i] = table[i].firstChild.innerHTML;
                }
                
                tempArray.sort();
                
                for (var i = 0; i < tempArray.length; i++) {
                    for(var j = 0; j < table.length; j++) {
                        if (table[j].firstChild.innerHTML == tempArray[i]) {
                            sortedTable.push(table[j].cloneNode(true));
                            break;
                        }
                    }
                }
                
                break;

            case "alpha2":
                var tempArray = [];
                for (var i = 0; i < table.length; i++) {
                    tempArray[i] = table[i].lastChild.lastChild.textContent;
                }
                
                tempArray.sort();
                
                for (var i = 0; i < tempArray.length; i++) {
                    for(var j = 0; j < table.length; j++) {
                        if (table[j].lastChild.lastChild.textContent == tempArray[i]) {
                            sortedTable.push(table[j].cloneNode(true));
                            break;
                        }
                    }
                }
                
                break;

            case "oldest":
                sortedTable = table.slice(0);
                break;

            case "newest":
                for (var i = table.length - 1; i >= 0; i--) {
                    sortedTable.push(table[i].cloneNode(true));
                }
                break;
                
            default:
                sortedTable = table.slice(0);
        }

        for (var i = 0; i < sortedTable.length; i++) {
            tableNode.appendChild(sortedTable[i]);
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
        var lang = localStorage.getItem("lang1"),
            otherLang;

        if (lang == "Other") {
            otherLang = localStorage.getItem("otherLang1");
            node = document.createElement("OPTION");
            node.innerHTML = otherLang;
            node.setAttribute("value", otherLang);
            document.getElementById("langSelect1").appendChild(node);

            document.getElementById("language1").setAttribute("placeholder", otherLang);
            document.getElementById("langSelect1").value = otherLang;
            document.getElementById("lang1").innerHTML = otherLang;
        } else {
            document.getElementById("langSelect1").value = lang;
            document.getElementById("language1").setAttribute("placeholder", lang);
            document.getElementById("lang1").innerHTML = lang;
        }
    }

    if (localStorage.getItem("lang2")) {
        var lang = localStorage.getItem("lang2"),
            otherLang;

        if (lang == "Other") {
            otherLang = localStorage.getItem("otherLang2");
            node = document.createElement("OPTION");
            node.innerHTML = otherLang;
            node.setAttribute("value", otherLang);
            document.getElementById("langSelect2").appendChild(node);

            document.getElementById("language2").setAttribute("placeholder", otherLang);
            document.getElementById("langSelect2").value = otherLang;
            document.getElementById("lang2").innerHTML = otherLang;
        } else {
            document.getElementById("langSelect2").value = lang;
            document.getElementById("language2").setAttribute("placeholder", lang)
            document.getElementById("lang2").innerHTML = lang;
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
            document.getElementById("lang1").innerHTML = otherLang;
        } else {
            document.getElementById("langSelect1").value = lang;
            document.getElementById("language1").setAttribute("placeholder", lang);
            document.getElementById("lang1").innerHTML = lang;
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
            document.getElementById("lang2").innerHTML = otherLang;
        } else {
            document.getElementById("langSelect2").value = lang;
            document.getElementById("language2").setAttribute("placeholder", lang)
            document.getElementById("lang2").innerHTML = lang;
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

function toggleDropdown(id) {
    var element = document.getElementById(id);
    
    if (element.className.indexOf("hidden") == -1) {
        element.className += "hidden";
    } else {
        element.className = element.className.replace("hidden", "");
    }
}

window.onclick = function(event) {
    var matches = event.target.matches ? event.target.matches('#sortButton') || event.target.matches('#sortButton i'): event.target.msMatchesSelector('#sortButton') ||  event.target.msMatchesSelector('#sortButton i');
    if (!matches) {
        var element = document.getElementById("sort-words-dropdown");
        
        if (element.className.indexOf("hidden") == -1) {
            element.className += "hidden";
        }
    }
}

function editWord(elem, index) {
    loadWordList();
    
    var wordString, wordArray, wordToEdit, newWord, newWordList, rowNode, tempNode, elemHtml, tableNode;
    
    wordString = localStorage.getItem("wordList");
    wordArray = wordString.split("&");
    wordToEdit = wordArray[index].split(":");
    
    // Picks out the correct table row to edit
    tableNode = document.getElementById("table");
    elemHtml = elem.parentNode.parentNode.innerHTML;
    for (var i = 0; i < tableNode.children.length; i++) {
        if (tableNode.children[i].innerHTML == elemHtml) {
            rowNode = tableNode.children[i];
            break;
        }
    }
    
    // This is extremely ugly and unreadable, but it's the best way to make it work in IE9
    tempNode = document.createElement("DIV");
    tempNode.innerHTML = '<table><tr><td><input type="text" class="table-input" id="edit1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onKeyDown="if(event.keyCode==13) acceptEditedWord(' + index + ');" value="' + wordToEdit[0] + '"></td><td><input type="text" class="table-input" id="edit2" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onKeyDown="if(event.keyCode==13) acceptEditedWord(' + index + ');" value="' + wordToEdit[1] + '"><button type="button" onclick="acceptEditedWord(' + index + ')" class="deleteWordButton"><i class="material-icons md-dark">&#xE5CA;</i></button><button type="button" onclick="loadWordList();" class="deleteWordButton"><i class="material-icons md-dark">&#xE14C;</i></button></td></tr></table>';
    
    rowNode.parentNode.replaceChild(tempNode.firstChild.firstChild.firstChild, rowNode);
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
