


let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

function addOneHome() {
    homePoints += 1
    homeEl.textContent = homePoints
}
function addTwoHome() {
    homePoints += 2
    homeEl.textContent = homePoints
}
function addThreeHome() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function addOneGuest() {
    guestPoints += 1
    guestEl.textContent = guestPoints
}
function addTwoGuest() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}
function addThreeGuest() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}
