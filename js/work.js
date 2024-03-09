export function work() {
    let work = document.getElementById("workButton")

    let main = document.getElementById("main")

    work.addEventListener("click", () => {
        main.innerHTML = `
        <div>
            Work Tab
        </div>
        `
    })
}