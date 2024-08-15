let menuList = document.getElementById("menu-list");
menuList.style.maxWidth = "0px"; // Ensure initial state

function toggleLeft() {
    if (menuList.style.maxWidth === "0px" || menuList.style.maxWidth === "") {
        menuList.style.maxWidth = "120px"; // Expand the menu
    } else {
        menuList.style.maxWidth = "0px"; // Collapse the menu
    }
}
