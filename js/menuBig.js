document.addEventListener("DOMContentLoaded", function() {
    const all = document.getElementById("optionAll") 
    const appetizers = document.getElementById("appetizersOption");
    const soups = document.getElementById("soupsOption");
    const salad= document.getElementById("saladOption");
    const burger = document.getElementById("burgerOption");
    const sandwich = document.getElementById("sandwichOption");
    const pizza = document.getElementById("pizzaOption");
    const entree = document.getElementById("entreeOption");
    const sides = document.getElementById("sidesOption");
    const dessert = document.getElementById("dessertOption");

    const appetizersContainer = document.getElementById("appetizersContainer");
    const soupContainer = document.getElementById("soupContainer");
    const saladContainer = document.getElementById("saladContainer");
    const smashContainer = document.getElementById("smashContainer");
    const sandwichContainer = document.getElementById("sandwichContainer");
    const pizzaContainer  = document.getElementById("pizzaContainer");
    const entreesContainer = document.getElementById("entreesContainer");
    const sidesContainer = document.getElementById("sidesContainer");
    const dessertContainer = document.getElementById("dessertContainer");

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



    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function add() {
        scrollToTop()
        appetizersContainer.classList.add("hidden")
        soupContainer.classList.add("hidden");
        saladContainer.classList.add("hidden");
        smashContainer.classList.add("hidden");
        sandwichContainer.classList.add("hidden");
        pizzaContainer.classList.add("hidden");
        entreesContainer.classList.add("hidden");
        sidesContainer.classList.add("hidden"); 
        dessertContainer.classList.add("hidden");

        all.classList.remove("selected")
        appetizers.classList.remove("selected")
        soups.classList.remove("selected")
        salad.classList.remove("selected")
        burger.classList.remove("selected")
        sandwich.classList.remove("selected")
        pizza.classList.remove("selected")
        entree.classList.remove("selected")
        sides.classList.remove("selected")
        dessert.classList.remove("selected")
    }

    function remove() {
        appetizersContainer.classList.remove("hidden")
        soupContainer.classList.remove("hidden");
        saladContainer.classList.remove("hidden");
        smashContainer.classList.remove("hidden");
        sandwichContainer.classList.remove("hidden");
        pizzaContainer.classList.remove("hidden");
        entreesContainer.classList.remove("hidden");
        sidesContainer.classList.remove("hidden"); 
        dessertContainer.classList.remove("hidden");

        all.classList.add("selected")
        appetizers.classList.remove("selected")
        soups.classList.remove("selected")
        salad.classList.remove("selected")
        burger.classList.remove("selected")
        sandwich.classList.remove("selected")
        pizza.classList.remove("selected")
        entree.classList.remove("selected")
        sides.classList.remove("selected")
        dessert.classList.remove("selected")

        allMobile.classList.remove("selected")
        appetizersMobile.classList.remove("selected")
        soupsMobile.classList.remove("selected")
        saladsMobile.classList.remove("selected")
        burgersMobile.classList.remove("selected")
        sandwichesMobile.classList.remove("selected")
        pizzaMobile.classList.remove("selected")
        entreesMobile.classList.remove("selected")
        sidesMobile.classList.remove("selected")
        dessertsMobile.classList.remove("selected")
    }

    const newUrlParams = new URLSearchParams(window.location.search);

    const source = newUrlParams.get('source');

    if (source === "salad") {
        add()
        saladContainer.classList.remove("hidden")
        salad.classList.add("selected")
    }

    if (source === "burger") {
        add()
        smashContainer.classList.remove("hidden")
        burger.classList.add("selected")
    }

    if (source === "soup") {
        add()
        soupContainer.classList.remove("hidden")
        soups.classList.add("selected")
    }
    
    checkOrientation();

    menuSelectorContainer = document.getElementById("menuSelectorContainer")

    window.addEventListener("resize", checkOrientation);

    function checkOrientation() {
        if (/Mobi/.test(navigator.userAgent) && window.innerWidth > window.innerHeight) {
            menuSelectorContainer.style.display = "none";
        } else {
            menuSelectorContainer.style.display = ""; 
        }
    }

    menuSelectorContainer = document.getElementById("menuSelectorContainer")

    function mobileCloser() {

        const hamburgerMenu = document.getElementById("mobileContainerHamburger")
        const background = document.getElementById("mobileMenuBackground")

        hamburgerMenu.classList.toggle("open")

            if (hamburgerMenu.classList.contains("open")) {
                background.style.visibility = "visible";
                background.style.visibility = "hidden";

            } else {
                background.style.visibility = "hidden";
            }
    }

    function mobile() {

        allMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            allMobile.classList.add("selected")
        })

        appetizersMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            appetizersContainer.classList.remove("hidden")
            appetizersMobile.classList.add("selected")
        })

        soupsMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            soupContainer.classList.remove("hidden")
            soupsMobile.classList.add("selected")
        })

        saladsMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            saladContainer.classList.remove("hidden")
            saladsMobile.classList.add("selected")
        })

        burgersMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            smashContainer.classList.remove("hidden")
            burgersMobile.classList.add("selected")
        })

        sandwichesMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            sandwichContainer.classList.remove("hidden")
            sandwichesMobile.classList.add("selected")
        })

        pizzaMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            pizzaContainer.classList.remove("hidden")
            pizzaMobile.classList.add("selected") 
        })

        entreesMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            entreesContainer.classList.remove("hidden")
            entreesMobile.classList.add("selected")
        })

        sidesMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            sidesContainer.classList.remove("hidden")
            sidesMobile.classList.add("selected")
        })

        dessertsMobile.addEventListener("click", () => {
            mobileCloser()
            remove()
            add()
            dessertContainer.classList.remove("hidden")
            dessertsMobile.classList.add("selected")
        })
    }


    function start() {
        all.addEventListener("click", () => {
            remove()
        })

        appetizers.addEventListener("click", () => {
            add()
            appetizersContainer.classList.remove("hidden")
            appetizers.classList.add("selected")
        })

        soups.addEventListener("click", () => {
            add()
            soupContainer.classList.remove("hidden")
            soups.classList.add("selected")
        })

        salad.addEventListener("click", () => {
            add()
            saladContainer.classList.remove("hidden")
            salad.classList.add("selected")
        })

        burger.addEventListener("click", () => {
            add()
            smashContainer.classList.remove("hidden")
            burger.classList.add("selected")
        })

        sandwich.addEventListener("click", () => {
            add()
            sandwichContainer.classList.remove("hidden")
            sandwich.classList.add("selected")
        })

        pizza.addEventListener("click", () => {
            add()
            pizzaContainer.classList.remove("hidden")
            pizza.classList.add("selected")
        })

        entree.addEventListener("click", () => {
            add()
            entreesContainer.classList.remove("hidden")
            entree.classList.add("selected")
        })

        sides.addEventListener("click", () => {
            add()
            sidesContainer.classList.remove("hidden")
            sides.classList.add("selected")
        })

        dessert.addEventListener("click", () => {
            add()
            dessertContainer.classList.remove("hidden")
            dessert.classList.add("selected")
        })
    }

    start()
    mobile()
})