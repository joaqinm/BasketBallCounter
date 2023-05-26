

// grab element for start button and time
let startButton = document.getElementById("start-button")
let showTime = document.getElementById("show-time")

// set time
let timer
let startingMinutes = 12
let time = startingMinutes *60

//start countdown 
function startTimer() {
    timer = setInterval(updateTimer, 1000)
}

//update time
function updateTimer() {
    let minutes = Math.floor(time/60)
    let seconds = time % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    showTime.textContent = `${minutes}:${seconds} `
    time--
    
    //stop time at 00:00 when time is up , prevents negative time
    if (time <= 0) {
        clearInterval(timer)
        showTime.textContent = "00:00"
    }
}

//reset time once player hits new game
function resetTimer() {
    clearInterval(timer) // end current timer
    time = startingMinutes * 60
    showTime.textContent = "12:00" // display new time
    timer = setInterval(updateTimer, 1000) // start time again 
}

//grab elements for score
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

//set starting score
let homePoints = 0
let guestPoints = 0

//add points to home team
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

//add points to guest team
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

//reset score values and display
function newGame() {
    homePoints = 0
    guestPoints = 0
    homeEl.textContent = homePoints
    guestEl.textContent = guestPoints
}
