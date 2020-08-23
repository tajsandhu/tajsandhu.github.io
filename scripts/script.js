var menuButton = document.body.querySelector(".mobile-menu-button");
var siteCanvas = document.body.querySelector(".site");

siteCanvas.classList.remove("reveal-menu");
menuButton.classList.remove("shift-button");

menuButton.addEventListener("click", () => {
    siteCanvas.style.transition = "left .7s ease";
    menuButton.style.transition = "right .7s ease";
    if (siteCanvas.classList.contains("reveal-menu") == true) {    
        menuButton.classList.remove("shift-button");
        siteCanvas.classList.remove("reveal-menu");
        setTimeout(() => {
            siteCanvas.style.overflowX = "hidden";
        }, 700);
    } else {
        siteCanvas.style.overflowX = "initial";
        siteCanvas.classList.add("reveal-menu");
        menuButton.classList.add("shift-button");
    }
});
