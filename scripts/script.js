// variables containing dom elements
var menuButton = document.body.querySelector(".mobile-menu-button");
var siteCanvas = document.body.querySelector(".site");
var mainContent = document.body.querySelector(".content-wrapper");


siteCanvas.classList.add("hide-menu");
menuButton.classList.remove("shift-button");

function hideSideBar() { 
    siteCanvas.classList.add("hide-menu");
    menuButton.classList.remove("shift-button");
}

function showSideBar() {
    siteCanvas.classList.remove("hide-menu");
    menuButton.classList.add("shift-button");
}

// listens to the 
menuButton.addEventListener("click", () => {
    siteCanvas.style.transition = "left .7s ease";
    menuButton.style.transition = "right .7s ease";
    if (siteCanvas.classList.contains("hide-menu") == true) { 
        showSideBar();
    } else {
        hideSideBar();
    }
});

mainContent.addEventListener("click", () => {
    if (siteCanvas.classList.contains("hide-menu") == false) {
        hideSideBar();
    }    
});