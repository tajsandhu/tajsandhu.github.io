function changeHomeImage() {
    if (width.matches) {
        document.getElementById("home-image").src = "/res/silver-and-black-laptop-computer-1229861.jpg";
    } else {
        document.getElementById("home-image").src = "/res/circuit-board-2182863.jpg";
    }
}

var width = window.matchMedia("(min-width: 601px)");

width.addListener(changeHomeImage);

function showMobileMenu() {
    var showMenu = document.getElementById("mobile-navigation");
    if (showMenu.style.visibility == "visible") {
        showMenu.style.visibility = "hidden";
    } else {
        showMenu.style.visibility = "visible";
    }
}
