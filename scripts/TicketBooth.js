const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


//listen for broswer generated event in one function
eventHub.addEventListener("click", customEvent => {
    //if the element with id of rideTicket is clicked
    if (customEvent.target.id === "rideTicket") {
        //create custom event for rides
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
    else if (customEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
    else if (customEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
    else if (customEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
    else if (customEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageEvent)
    }
}
)
//adds all the buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `

}

//old code in separate functions
// //listen for broswer generated event
// eventHub.addEventListener("click", customEvent => {
//     //if the element with id of rideTicket is clicked
//     if (customEvent.target.id === "rideTicket") {
//         //create custom event for rides
//         const rideEvent = new CustomEvent("rideTicketPurchased")
//         eventHub.dispatchEvent(rideEvent)
//     }
// }
// )
// //listen for broswer generated event
// eventHub.addEventListener("click", customEvent => {
//     if (customEvent.target.id === "foodTicket") {
//         const foodEvent = new CustomEvent("foodTicketPurchased")
//         eventHub.dispatchEvent(foodEvent)
//     }
// }
// )
// eventHub.addEventListener("click", customEvent => {
//     if (customEvent.target.id === "gameTicket") {
//         const gameEvent = new CustomEvent("gameTicketPurchased")
//         eventHub.dispatchEvent(gameEvent)
//     }
// }
// )

