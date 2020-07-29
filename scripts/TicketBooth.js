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

//custom event for any ticket purchased to dispatch to TotalTickets.js
eventHub.addEventListener("click", eventObj => {
    if(event.target.id === "gameTicket" ||
    event.target.id === "rideTicket" ||
    event.target.id === "sideshowTicket" ||
    event.target.id === "foodTicket" ||
    event.target.id === "fullPackageTicket"
    ) {

        const ticketEvent = new CustomEvent ("ticketPurchased", {
            detail: {
                ticketCount: event.target.value,
            }
        })

    eventHub.dispatchEvent(ticketEvent)

    }
})


//adds all the buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket" value="1">Ride Ticket</button>
        <button id="foodTicket" value="1">Food Ticket</button>
        <button id="gameTicket" value="1">Game Ticket</button>
        <button id="sideshowTicket" value="1">Sideshow Ticket</button>
        <button id="fullPackageTicket" value="4">Full Package Ticket</button>
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

