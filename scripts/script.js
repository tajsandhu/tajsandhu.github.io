var menuButton = document.body.querySelector(".mobile-menu-button");
var siteCanvas = document.body.querySelector(".site");

siteCanvas.classList.toggle("reveal-menu");
menuButton.classList.toggle("shift-button");

menuButton.addEventListener("click", () => {
    siteCanvas.style.transition = "left .7s";
    menuButton.style.transition = "right .7s";
    siteCanvas.classList.toggle("reveal-menu");
    menuButton.classList.toggle("shift-button");
    if (siteCanvas.style.left != "-250px") {
        siteCanvas.style.overflowX = "initial";
    } else {
        siteCanvas.style.left = "0";
        setTimeout(() => {
            siteCanvas.style.overflowX = "hidden";
        }, 700);
    }
});
