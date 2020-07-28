// This is a module-level variable. It is not scoped to a function
const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let tickets = 0;

//function to listen for purchase events
export const TotalTicketsComponent = () => {
    eventHub.addEventListener("rideTicketPurchased", (rideEvent) => {
        tickets++
        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    })
    eventHub.addEventListener("fullPackageTicketPurchased", (fullPackageEvent) => {
        tickets++
        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    })
    eventHub.addEventListener("sideshowTicketPurchased", (sideshowEvent) => {
        tickets++
        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    })
    eventHub.addEventListener("gameTicketPurchased", (gameEvent) => {
        tickets++
        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    })
    eventHub.addEventListener("foodTicketPurchased", (foodEvent) => {
        tickets++
        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    })

    
    
}
