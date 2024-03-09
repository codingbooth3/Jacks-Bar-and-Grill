export function plan() {
    let party = document.getElementById("partyButton")

    let main = document.getElementById("main")

    party.addEventListener("click", () => {
        main.innerHTML = `
        <div>
            Party Tab
        </div>
        `
    })
}