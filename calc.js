// HOME SCORES


let homePointsEl = document.getElementById("home-points")

let homePointsBtnOne = document.getElementById("home-points-1")
let homePoints = 0

function IncreaseScoreOne() {
    homePoints += 1
    homePointsEl.textContent = homePoints
}

function IncreaseScoreTwo() {
    homePoints += 2
    homePointsEl.textContent = homePoints
}


function IncreaseScoreThree() {
    homePoints += 3
    homePointsEl.textContent = homePoints
}

// RESET 

function resetHome() {
    homePoints = 0
    homePointsEl.textContent = homePoints
}


// GUEST SCORES 

let guestPointsEl = document.getElementById("guest-points")
let guestPointsBtnOne = document.getElementById("guest-points-1")
let guestPoints = 0

function guestScoreOne() {
    guestPoints += 1
    guestPointsEl.textContent = guestPoints
}

function guestScoreTwo() {
    guestPoints += 2
    guestPointsEl.textContent = guestPoints
}

function guestScoreThree() {
    guestPoints += 3
    guestPointsEl.textContent = guestPoints
}

// RESET 

function resetGuest() {
    guestPoints = 0
    guestPointsEl.textContent = guestPoints
}