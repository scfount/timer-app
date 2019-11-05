
function myTimer() {
    // user input variables
    const sessionDuration = Number(document.getElementById("session-duration").value);
    const breakOneDuration = Number(document.getElementById("break-one-duration").value);
    const breakTwoDuration = Number(document.getElementById("break-two-duration").value);

    // convert the user input from minutes to milliseconds
    let sessionDurationMilli = minToMilli(sessionDuration)


    // add milliseconds to current time to get end time
    let endSession = currentTime() + sessionDurationMilli;

    //  console.log(milliToTime(getDistance(endSession, currentTime())))

    let x = setInterval(function () {
        let remainingTime = getDistance(endSession, currentTime());
        document.getElementById("session-one").innerHTML = milliToTime(remainingTime);
        
        if (remainingTime < 0) {
            clearInterval(x);
            document.getElementById("session-one").innerHTML = "Times up!"
        }

    }, 1000);

    document.getElementById("break-one").innerHTML = `Session 1 start: ${milliToLocalTime(currentTime())} \n 
                                                      Session 1 end: ${milliToLocalTime(endSession)}`; 


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

// let currentTimer = setInterval(currentTime, 1000);

// function currentTime() {
//     let currentDate = new Date().toLocaleTimeString();
//     document.getElementById("timer").innerHTML = currentDate;

// }
