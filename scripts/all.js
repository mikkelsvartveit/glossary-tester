var activeProfile = "profile" + 1;
var storage = {};
if (localStorage.getItem(activeProfile)) {
    storage = JSON.parse(localStorage.getItem(activeProfile));
} else {
    updateStorage();
}

function updateStorage() {
    localStorage.setItem(activeProfile, JSON.stringify(storage));
}

function numberOfWords() {
    var number;

    if (storage.wordList) {
        var wordString = storage.wordList,
            wordArray = wordString.split(";");
        number = wordArray.length;
    } else {
        number = 0;
    }

    return number;
}

var dropdownNode = document.getElementById("dropdown-menu");

function showDropdown() {
    if (dropdownNode.className == "dropdown-hide") {
        dropdownNode.className = "dropdown-show";
    }
    
    else if (dropdownNode.className == "dropdown-show") {
        dropdownNode.className = "dropdown-hide";
    }
}