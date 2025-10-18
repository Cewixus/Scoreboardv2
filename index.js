const homeCounter = document.getElementById("home-counter")
const guestCounter = document.getElementById("guest-counter")
const incrementSpots = document.querySelectorAll(".increments")


let counters = {
    "home-increment":0,
    "guest-increment":0
}

incrementSpots.forEach(spot =>
{
    for(let i = 1; i <= 3; i++)
    {
        const buttonEl = document.createElement("button")
        buttonEl.textContent = `+${i}`
        
        buttonEl.addEventListener("click", () => {
            addPoints(i, spot.id)
        })
        spot.append(buttonEl)
    }
})

function addPoints(points, buttonInfo)
{
    counters[buttonInfo] += points
    homeCounter.textContent = counters["home-increment"]
    guestCounter.textContent = counters["guest-increment"]
}