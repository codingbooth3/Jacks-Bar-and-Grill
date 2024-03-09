export function beverage() {
    let beverage = document.getElementById("beverageButton")

    let main = document.getElementById("main")

    beverage.addEventListener("click", () => {
        main.innerHTML = `
            <div>
                Beverage Tab
            </div>
        `
    })
}