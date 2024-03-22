function hamburgerMenu() {
    const hamburger = document.getElementById("hamburger")

    const bar1 = document.querySelector(".bar1")
    const bar2 = document.querySelector(".bar2")
    const bar3 = document.querySelector(".bar3")

    const mobilePopup = document.getElementById("mobilePopup")

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("open")
        
        if (hamburger.classList.contains("open")) {
            mobilePopup.style.visibility = "visible"
        } else {
            mobilePopup.style.visibility = "hidden"
        }
    })

}


hamburgerMenu();


function menuBurger() {
    const hamburgerMenu = document.getElementById("mobileContainerHamburger")

    const bar4 = document.querySelector(".bar4")
    const bar5 = document.querySelector(".bar5")
    const bar6 = document.querySelector(".bar6")

    const background = document.getElementById("mobileMenuBackground")

    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
        } else {
            background.style.visibility = "hidden";
        }
    })
}

menuBurger()