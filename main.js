
function myTimer() {
    // user input variables
    const startTime = timeToMilii(document.getElementById("session-start-time").value).getTime();
    const sessionDuration = Number(document.getElementById("session-duration").value);
    const breakOneDuration = Number(document.getElementById("break-one-duration").value);
    const flexDuration = Number(document.getElementById("flex-duration").value);
    

   
    // const participants = {
    //    ppt01: person1,
    //    ppt02: person2,
    //    ppt03: person3,
    //    ppt04: person4,
    //    ppt05: person5,
    //    ppt06: person6,
    //    ppt07: person7,
    // };

    const pods = [];
    const participants = [];

    // convert the user input from minutes to milliseconds
    let sessionDurationMilli = minToMilli(sessionDuration);
    let breakOneDurationMilli = minToMilli(breakOneDuration);
    let flexDurationMilli = minToMilli(flexDuration);


    // add milliseconds to current time to get end time
    let startSessionOne = startTime;
    let knockTimeOne = (startTime + sessionDurationMilli) - 300000;
    let endSessionOne = startTime + sessionDurationMilli;
    let endFlexOne = endSessionOne + flexDurationMilli;

    let breakStart = endSessionOne;
    let endBreakOne = breakStart + breakOneDurationMilli;

    let startSessionTwo = endBreakOne;
    let knockTimeTwo = endBreakOne + sessionDurationMilli - 300000;
    let endSessionTwo = endBreakOne + sessionDurationMilli;
    let endFlexTwo = endSessionTwo + flexDurationMilli;

    let startSessionThree = endFlexTwo;
    let knockTimeThree = endFlexTwo + sessionDurationMilli - 300000;
    let endSessionThree = endFlexTwo + sessionDurationMilli;
    let endFlexThree = endSessionThree + flexDurationMilli;

    let startSessionFour = endFlexThree;
    let knockTimeFour = endFlexThree + sessionDurationMilli - 300000;
    let endSessionFour = endFlexThree + sessionDurationMilli;
    let endFlexFour = endSessionFour + flexDurationMilli;

    let startSessionFive = endFlexFour;
    let knockTimeFive = endFlexFour + sessionDurationMilli - 300000;
    let endSessionFive = endFlexFour + sessionDurationMilli;
    let endFlexFive = endSessionFive + flexDurationMilli;

    let startSessionSix = endFlexFive;
    let knockTimeSix = endFlexFive + sessionDurationMilli - 300000;
    let endSessionSix = endFlexFive + sessionDurationMilli;
    let endFlexSix = endSessionSix + flexDurationMilli;

    getPods(pods);
    getParticipants(participants);
    displayEndTimes(startSessionOne, knockTimeOne, endSessionOne, endFlexOne, "session-one-start", "session-one-knock", "session-one-end", "session-one-flex-end");
    displayEndTimes(breakStart, breakStart, endBreakOne, endBreakOne, "break-one-start", "break-one-start", "break-one-end", "flex",);
    displayEndTimes(startSessionTwo, knockTimeTwo, endSessionTwo, endFlexTwo, "session-two-start", "session-two-knock", "session-two-end", "session-two-flex-end");
    displayEndTimes(startSessionThree, knockTimeThree, endSessionThree, endFlexThree, "session-three-start", "session-three-knock", "session-three-end", "session-three-flex-end");
    displayEndTimes(startSessionFour, knockTimeFour, endSessionFour, endFlexFour, "session-four-start", "session-four-knock", "session-four-end", "session-four-flex-end");
    displayEndTimes(startSessionFive, knockTimeFive, endSessionFive, endFlexFive, "session-five-start", "session-five-knock", "session-five-end", "session-five-flex-end");
    displayEndTimes(startSessionSix, knockTimeSix, endSessionSix, endFlexSix, "session-six-start", "session-six-knock", "session-six-end", "session-six-flex-end");

    participantLocation(participants, pods, "session01");
    participantLocation(participants, pods, "session02");
    participantLocation(participants, pods, "session03");
    participantLocation(participants, pods, "session04");
    participantLocation(participants, pods, "session05");
    participantLocation(participants, pods, "session06");
    
    console.log(pods);
    
    
   
  

}

//FUNCTIONS

function currentTime() {
    const now = new Date().getTime();
    return now;
}    

// convert user input from time hh:mm:AM/PM and convert to milliseconds
function timeToMilii(time) {
    let date = new Date();
    date.setHours(Number(time.split(':')[0]));
    date.setMinutes(Number(time.split(':')[1]));
    return date;
}

// convert user input (minutes) to milliseconds
function minToMilli(minutes) {
    return minutes * 60000;
}

// convert milliseconds to local time string
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

// this function will take the end time in milliseconds, convert it to time as well as coutdown timer, and place within the html ID
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

// this function takes in 8 arguments to find element IDs on the pge and set the HTML to the correct time
function displayEndTimes(start, knock, endSession, endFlex, startId, knockId, endId, flexId) {
    if (knockId === "break-one-start") {
        document.getElementById(knockId).innerHTML = milliToLocalTime(knock);
        document.getElementById(endId).innerHTML = milliToLocalTime(endSession);
    } else {
        document.getElementById(startId).innerHTML = milliToLocalTime(start);
        document.getElementById(knockId).innerHTML = milliToLocalTime(knock);
        document.getElementById(endId).innerHTML = milliToLocalTime(endSession);
        document.getElementById(flexId).innerHTML = milliToLocalTime(endFlex);
    };
    
}

// this function takes two arrays, participants and pods, determines how many pods are needed based on length of ppts array and allocates participants to pods appropriately
function participantLocation(pptsArr, pods, session) {    
    pptsArr.forEach((a, i) => document.getElementById(session).innerHTML += 
    `<div class="">
    <p class="d-inline-flex font-weight-bold">${pods[i]}: </p>
    <p class="d-inline-flex">${a}</p>
    </div>`);
    pptsArr.unshift(pptsArr.pop());
};



//Get Pods in use

function getPods(pods) {
    let allPods = ["pod01", "pod03", "pod04", "pod05", "pod06", "pod07", "pod08"];
    allPods.forEach(function(pod) {
        if (document.getElementById(pod).checked === true) {
            pods.push(document.getElementById(pod).value);
        } else return;
    });
};


//Get Participant Names

function getParticipants(particpants) {

    let allppts = ["p01", "p02", "p03", "p04", "p05", "p06", "p07"];

    allppts.forEach(function(ppt) {
        if (document.getElementById(ppt).value != "") {
            particpants.push(document.getElementById(ppt).value);
        } else return;
    });
}


function hideTimer(time, location) {
    let remainingSessionTime = getDistance(time, currentTime());
    
    if (remainingSessionTime < 0) {
        document.getElementById(location).style.display = "none";
    }
}
