var menuButton = document.body.querySelector("#mobile-menu-button");
var siteCanvas = document.body.querySelector(".site");


menuButton.addEventListener("click", () => {
    if (siteCanvas.style.left != "-250px") {
        siteCanvas.style.left = "-250px";
    } else {
        siteCanvas.style.left = "0";
    }
});
