var dropdownNode = document.getElementById("dropdown-menu");

function showDropdown() {
    if(dropdownNode.className == "dropdown-hide") {
        dropdownNode.className = "dropdown-show";
    }
    
    else if(dropdownNode.className == "dropdown-show") {
        dropdownNode.className = "dropdown-hide";
    }
}