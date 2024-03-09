export function foodMenu() {
    let menu = document.getElementById("menuButton")

    let main = document.getElementById("main")

    menu.addEventListener("click", () => {
        main.innerHTML = `
            <div>
                Menu Tab
            </div>
        `
    })
}