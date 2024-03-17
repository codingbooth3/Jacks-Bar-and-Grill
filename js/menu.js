const appetizers = document.getElementById("appetizersOption");
const soups = document.getElementById("soupsOption");
const salad= document.getElementById("saladOption");
const burger = document.getElementById("burgerOption");
const sandwich = document.getElementById("sandwichOption");
const pizza = document.getElementById("pizzaOption");
const entree = document.getElementById("entreeOption");
const sides = document.getElementById("sidesOption");
const dessert = document.getElementById("dessertOption");

const all = document.getElementById("optionAll")

let appetizersContainer = document.getElementById("appetizersContainer");
let soupContainer = document.getElementById("soupContainer");
let saladContainer = document.getElementById("saladContainer");
let smashContainer = document.getElementById("smashContainer");
let sandwichContainer = document.getElementById("sandwichContainer");
let pizzaContainer  = document.getElementById("pizzaContainer");
let entreesContainer = document.getElementById("entreesContainer");
let sidesContainer = document.getElementById("sidesContainer");
let dessertContainer = document.getElementById("dessertContainer");


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

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


function mobile() {
    const allMobile = document.getElementById("allCategoriesMobile")
    const appetizersMobile = document.getElementById("appetizersMobile")
    const soupsMobile = document.getElementById("soupsMobile")
    const saladsMobile = document.getElementById("saladsMobile")
    const burgersMobile = document.getElementById("burgersMobile")
    const sandwichesMobile = document.getElementById("sandwichesMobile")
    const pizzaMobile = document.getElementById("pizzaMobile")
    const entreesMobile = document.getElementById("entreesMobile")
    const sidesMobile = document.getElementById("sidesMobile")
    const dessertsMobile = document.getElementById("dessertsMobile")

    const hamburgerMenu = document.getElementById("mobileContainerHamburger")
    const background = document.getElementById("mobileMenuBackground")


    allMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.remove("hidden")
        soupContainer.classList.remove("hidden")
        saladContainer.classList.remove("hidden")
        smashContainer.classList.remove("hidden")
        sandwichContainer.classList.remove("hidden")
        pizzaContainer.classList.remove("hidden")
        entreesContainer.classList.remove("hidden")
        sidesContainer.classList.remove("hidden") 
        dessertContainer.classList.remove("hidden")
    })

    appetizersMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.remove("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    soupsMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.remove("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    saladsMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.remove("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    

    burgersMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.remove("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    sandwichesMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.remove("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    pizzaMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.remove("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    entreesMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.remove("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.add("hidden")
    })

    sidesMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.remove("hidden") 
        dessertContainer.classList.add("hidden")
    })

    dessertsMobile.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("open")

        if (hamburgerMenu.classList.contains("open")) {
            background.style.visibility = "visible";
            background.style.visibility = "hidden";

        } else {
            background.style.visibility = "hidden";
        }
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden")
        saladContainer.classList.add("hidden")
        smashContainer.classList.add("hidden")
        sandwichContainer.classList.add("hidden")
        pizzaContainer.classList.add("hidden")
        entreesContainer.classList.add("hidden")
        sidesContainer.classList.add("hidden") 
        dessertContainer.classList.remove("hidden")
    })
}


function start() {
    all.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.remove("hidden")
        soupContainer.classList.remove("hidden")
        saladContainer.classList.remove("hidden")
        smashContainer.classList.remove("hidden")
        sandwichContainer.classList.remove("hidden")
        pizzaContainer.classList.remove("hidden")
        entreesContainer.classList.remove("hidden")
        sidesContainer.classList.remove("hidden") 
        dessertContainer.classList.remove("hidden")
    })

    appetizers.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.remove("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    soups.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.remove("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    salad.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.remove("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    burger.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.remove("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    sandwich.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.remove("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    pizza.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.remove("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    entree.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.remove("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    sides.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.remove("hidden"); 
        dessertContainer.classList.add("hidden");
    })

    dessert.addEventListener("click", () => {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.remove("hidden");
    })
}

start()
mobile()