// This is a module-level variable. It is not scoped to a function
const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let tickets = 0;

contentTarget.innerHTML = `Total tickets purchased: ${tickets}`

export const TotalTicketsComponent = () => {
    eventHub.addEventListener("ticketPurchased", customEvent => {
        console.log("TotalTickets: heard ticket purchased event and logs object")
        console.log(customEvent.detail)
        tickets = tickets + parseInt(customEvent.detail.ticketCount)
        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    }
    )
}

// //function to listen for purchase events
// export const TotalTicketsComponent = () => {
//     eventHub.addEventListener("rideTicketPurchased", (rideEvent) => {
//         tickets++
//         contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
//     })
//     eventHub.addEventListener("fullPackageTicketPurchased", (fullPackageEvent) => {
//         tickets++
//         contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
//     })
//     eventHub.addEventListener("sideshowTicketPurchased", (sideshowEvent) => {
//         tickets++
//         contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
//     })
//     eventHub.addEventListener("gameTicketPurchased", (gameEvent) => {
//         tickets++
//         contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
//     })
//     eventHub.addEventListener("foodTicketPurchased", (foodEvent) => {
//         tickets++
//         contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
//     }) 
    
// }

// //render function 
// const render = 
