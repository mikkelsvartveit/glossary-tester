function darkMode() {
    if (localStorage.getItem("darkMode")) {
        document.body.className = "dark";
        document.getElementById("theme-color").setAttribute("content", "#F28200");
    } else {
        document.body.className = "";
        document.getElementById("theme-color").setAttribute("content", "#009DA5");
    }
}

darkMode();

function toggleDarkMode() {
    if (localStorage.getItem("darkMode")) {
        localStorage.removeItem("darkMode")
    } else {
        localStorage.setItem("darkMode", "true")
    }

    darkMode();
}

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

function prideMode() {
    document.getElementsByClassName("menu")[0].style.background = "url(/images/pride.gif)";
    document.getElementById("dropdown-menu").style.background = "url(/images/pride.gif)";
}

if (storage.wordList.toLowerCase().includes("pride")) {
    prideMode();
}
