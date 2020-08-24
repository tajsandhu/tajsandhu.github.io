// variables containing dom elements
var menuButton = document.body.querySelector(".mobile-menu-button");
var siteCanvas = document.body.querySelector(".site");
var mainContent = document.body.querySelector(".content-wrapper");

// initially hides the sidebar
siteCanvas.classList.add("hide-menu");
menuButton.classList.remove("shift-button");

// function to hide the sidebar and shift the menu button to the default location
function hideSideBar() { 
    siteCanvas.classList.add("hide-menu");
    menuButton.classList.remove("shift-button");
}

// function to show the sidebar and shift the button to the sidebar open position
function showSideBar() {
    siteCanvas.classList.remove("hide-menu");
    menuButton.classList.add("shift-button");
}

// listens to the menu button being clicked
menuButton.addEventListener("click", () => {
    siteCanvas.style.transition = "left .7s ease";
    menuButton.style.transition = "right .7s ease";
    if (siteCanvas.classList.contains("hide-menu") == true) { 
        showSideBar();
    } else {
        hideSideBar();
    }
});


// listens to a click off of the sidebar and closes the sidebar if open
mainContent.addEventListener("click", () => {
    if (siteCanvas.classList.contains("hide-menu") == false) {
        hideSideBar();
    }    
});