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

// Dismisses dialog box when clicking outside it
document.getElementById("dim").addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("overlay");
    for (var i = 0; i < elements.length; i++) {
        showOverlay(elements[i].getAttribute("id"), false);
    }
});

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

function importWordList(id) {
    var url = "/imp.php?i=" + id;
    window.location.href = url;
}

function exportWordList() {
    var name = document.getElementById("exportOverlayInput").value;
    var exportStorage = {};
    
    exportStorage.wordList = storage.wordList;
    exportStorage.lang1 = storage.lang1;
    exportStorage.lang2 = storage.lang2;
    if(storage.otherLang1) {
        exportStorage.otherLang1 = storage.otherLang1;
    }
    if(storage.otherLang2) {
        exportStorage.otherLang2 = storage.otherLang2;
    }
    
    var exportString = JSON.stringify(exportStorage);
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            if(this.responseText == "ERROR") {
                showOverlay("exportErrorOverlay", true);
            } else {
                var id = this.responseText;
                var link = window.location.hostname + "/imp.php?i=" + id;

                document.getElementById("wordListName").innerHTML = name;
                document.getElementById("wordListKey").innerHTML = id.toString().toUpperCase();
                document.getElementById("exportSuccessOverlayLink").value = link;

                showOverlay("exportSuccessOverlay", true);
            }
        }
    }
    
    xhttp.open("POST", "/php/export.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&data=" + exportString);
}

function copyText(id) {
    var text = document.getElementById(id);
    text.select();
    document.execCommand("copy");
}

document.getElementById("importOverlayImportButton").addEventListener("click", function() {
    var id = document.getElementById("importOverlayInput").value.toLowerCase();
    importWordList(id);
});

document.getElementById("importOverlayCancelButton").addEventListener("click", function() {
    showOverlay('importOverlay', false);
});

document.getElementById("exportOverlayExportButton").addEventListener("click", function() {
    showOverlay('exportOverlay', false);
    exportWordList();
});

document.getElementById("exportOverlayCancelButton").addEventListener("click", function() {
    showOverlay('exportOverlay', false);
});

document.getElementById("exportSuccessOverlayCopyButton").addEventListener("click", function() {
    copyText("exportSuccessOverlayLink");
});

document.getElementById("exportSuccessOverlayOkButton").addEventListener("click", function() {
    showOverlay('exportSuccessOverlay', false);
});

document.getElementById("exportErrorOverlayOkButton").addEventListener("click", function() {
    showOverlay('exportErrorOverlay', false);
});
