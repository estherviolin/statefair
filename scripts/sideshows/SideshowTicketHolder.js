const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", (sideshowEvent) => {
        contentTarget.innerHTML += `
        <div class="person "></div>
        `
    })
}
