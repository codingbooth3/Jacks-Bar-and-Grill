export function home() {
    let home = document.getElementById("logo")

    let main = document.getElementById("main")

    home.addEventListener("click",() => {
        main.innerHTML = `
        <div id="mainHeader">
            <h1 id="headerText">Where Great Drinks Meet Good Times!</h1>
            <div>
                <img src="istockphoto-1136617596-612x612.jpg" alt="" id="headingImage">
            </div>
        </div>
        <div id="cta">
            <div id="ctaBody">
                <h3 id="ctaText">
                    Order Todays Special Now
                </h3>
                <button id="special">
                    Click Here
                </button>
            </div>
        </div>
        <div id="menuBody">
            <div class="menuBodyItem">
                <img src="menuItem/18_Brothers_May_CuervoPatron.webp" alt="" class="menuImage">
                <h3 class="menuText">Menu</h3>
            </div>
            <div class="menuBodyItem">
                <img src="menuItem/IndyDT5.webp" alt="" class="menuImage">
                <h3 class="menuText">Location</h3>
            </div>
            <div class="menuBodyItem">
                <img src="menuItem/MKE ReOpening Pics-9.webp" alt="" class="menuImage">
                <h3 class="menuText">Gallery</h3>
            </div>
            <div class="menuBodyItem">
                <img src="menuItem/Mom.webp" alt="" class="menuImage">
                <h3 class="menuText">Mom</h3>
            </div>
            <div class="menuBodyItem">
                <img src="menuItem/RedKneck.webp" alt="" class="menuImage">
                <h3 class="menuText">Redneck</h3>
            </div>
            <div class="menuBodyItem">
                <img src="menuItem/UltimateBLT.webp" alt="" class="menuImage">
                <h3 class="menuText">Blt</h3>
            </div>
        </div>
        <div id="contactMobile">
            <div id="contactBody">
                <h1 id="contactHeader" class="flex">
                    Join Our News Letter for Offers and Specials
                </h1>
                <h3 id="contactSubHeader" class="flex">
                    Stay up to date with our menu and deals
                </h3>
                <a href="" id="emailSignUp">Subscribe Here!</a>
            </div>
        </div>
        <div id="location">
            <h2>
                Location
            </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2268.050770571689!2d-82.73171970496949!3d37.59566646431446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88450ff777f12481%3A0xa5817453041ae009!2s8550%20KY-1428%2C%20Allen%20City%2C%20KY%
            2041601!5e1!3m2!1sen!2sus!4v1709768466887!5m2!1sen!2sus" 
            id="locationFrame" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        `
    })

    
}