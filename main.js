
function myTimer() {
    // user input variables
    const sessionDuration = Number(document.getElementById("session-duration").value);
    const breakOneDuration = Number(document.getElementById("break-one-duration").value);
    const flexDuration = Number(document.getElementById("flex-duration").value);

    // convert the user input from minutes to milliseconds
    let sessionDurationMilli = minToMilli(sessionDuration);
    let breakOneDurationMilli = minToMilli(breakOneDuration);
    let flexDurationMilli = minToMilli(flexDuration);


    // add milliseconds to current time to get end time
    let endSessionOne = currentTime() + sessionDurationMilli + flexDurationMilli;
    let endBreakOne = endSessionOne + breakOneDurationMilli;
    let endSessionTwo = endBreakOne + sessionDurationMilli + flexDurationMilli;
    let endSessionThree = endSessionTwo + sessionDurationMilli + flexDurationMilli;
    let endSessionFour = endSessionThree + sessionDurationMilli + flexDurationMilli;
    let endSessionFive = endSessionFour + sessionDurationMilli + flexDurationMilli;
    let endSessionSix = endSessionFive + sessionDurationMilli + flexDurationMilli;

    theTimer(endSessionOne, "session-one", "session-one-end");
    theTimer(endBreakOne, "break-one", "break-one-end");
    theTimer(endSessionTwo, "session-two", "session-two-end");
    theTimer(endSessionThree, "session-three", "session-three-end");
    theTimer(endSessionFour, "session-four", "session-four-end");
    theTimer(endSessionFive, "session-five", "session-five-end");
    theTimer(endSessionSix, "session-six", "session-six-end");
}

//FUNCTIONS

function currentTime() {
    const now = new Date().getTime();
    return now;
}

// convert user input (minutes) to milliseconds
function minToMilli(minutes) {
    return minutes * 60000;
}

// convert millisecons to local time string
function milliToLocalTime(milliseconds) {
    let endDate = new Date(milliseconds);

    return endDateString = new Date(endDate).toLocaleTimeString();
}

// get the distance in milliseconds from now till the end of X
function getDistance(endTime, currentTime) {
    return distance = endTime - currentTime;
}

// Time calculations for days, hours, minutes and seconds
function milliToTime(distance) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `H:${hours} M:${minutes} S:${seconds}`;

}

function theTimer(endTime, count, endTimeId) {
    let x = setInterval(function () {
    let remainingSessionTime = getDistance(endTime, currentTime());

    document.getElementById(count).innerHTML = `${milliToTime(remainingSessionTime)}`;

    document.getElementById(endTimeId).innerHTML = `${milliToLocalTime(endTime)}`;

    if (remainingSessionTime < 0) {
    clearInterval(x);
    document.getElementById(count).innerHTML = "Times up!";
    }

    }, 1000);
}

function hideTimer(time, location) {
    let remainingSessionTime = getDistance(time, currentTime());
    
    if (remainingSessionTime < 0) {
        document.getElementById(location).style.display = "none";
    }
}

// let currentTimer = setInterval(currentTime, 1000);

// function currentTime() {
//     let currentDate = new Date().toLocaleTimeString();
//     document.getElementById("timer").innerHTML = currentDate;

// }
