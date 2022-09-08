const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", () =>{
    crerateNotification()
})

function crerateNotification() {
    const notif = document.createElement("div")
    notif.innerText = "This challenge is carzy !"

    notif.classList.add("toast")

    container.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    },3000)
}
