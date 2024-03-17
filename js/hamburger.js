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
