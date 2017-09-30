var dropdownNode = document.getElementById("dropdown-menu");
dropdownNode.style.display = "none";

function showDropdown() {
    if(dropdownNode.style.display == "none") {
        dropdownNode.style.display = "block";
    }
    
    else if(dropdownNode.style.display == "block") {
        dropdownNode.style.display = "none";
    }
}