const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", (fullPackageEvent) => {
       
        //loop through node list created by querySelectorAll
        contentTarget.forEach(element => {
            element.innerHTML += `
        <div class="person bigSpender"></div>
        `

        })
        
        
    })
}
