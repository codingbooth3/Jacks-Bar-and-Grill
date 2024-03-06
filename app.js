const close = document.getElementById("mobilePopupClose")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click touchstart", () => {
    mobilePopup.style.display = "visible";
})
