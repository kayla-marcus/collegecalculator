window.onload = initAll;

// Log for debugging purposes
function initAll() {
    console.log("collapseSections initAll has started...")
}


function showRentAmount() {
    // To debug
    console.log("showRentAmount started...")
    // To show and hide the next question in the Room and Board section
    document.getElementById("section--rentAmount").style.display="block";
}
function hideRentAmount() {
    document.getElementById("section--rentAmount").style.display="none";
}


// To show and hide the next question in the Transportation section for first question
function showMilesAway() {
    console.log("showMilesAmount started...")
    document.getElementById("section--milesAway").style.display="block";
}
function hideMilesAway() {
    document.getElementById("section--milesAway").style.display="none";
}

// To show and hide the next question in the Transportation section for the third question
function showMPG() {
    console.log("showMPG started...")
    document.getElementById("section--MPG").style.display="block";
}
function hideMPG() {
    document.getElementById("section--MPG").style.display="none";
}

// To show and hide the next question in the Transportation section for first question
function showMilesAway() {
    console.log("showMilesAmount started...")
    document.getElementById("section--milesAway").style.display="block";
}
function hideMilesAway() {
    document.getElementById("section--milesAway").style.display="none";
}

// To show and hide the next question in the Financial Aid section for the first question
function showFinAidAmount() {
    console.log("showFinAidAmount started...")
    document.getElementById("section--finAidAmount").style.display="block";
}
function hideFinAidAmount() {
    document.getElementById("section--finAidAmount").style.display="none";
}