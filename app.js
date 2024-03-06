const close = document.getElementById("mobilePopupClose")
const hamburger = document.getElementById("hamburger")

const mobilePopup = document.getElementById("mobilePopup")

hamburger.addEventListener("click", () =>  {
    mobilePopup.style.display = "visible";
})
