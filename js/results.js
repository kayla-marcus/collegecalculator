window.onload = initAll();

function initAll() {
    console.log("initAll has started...")
}
// Found on stack overflow
// https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
function addCommas(number) {
    number = number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //console.log("number is " + number);
    return number;
}

var semTuition = Math.round(localStorage.getItem("semesterTuition"));
var semRent = Math.round(localStorage.getItem("semesterRent"));
var booksSuppliesCost = Math.round(localStorage.getItem("booksSuppliesCost"));
var semTravelCost = Math.round(localStorage.getItem("travelCost"));
var semPersonalExpenses = Math.round(localStorage.getItem("personalExpenses"));
var semFinancialAid = Math.round(localStorage.getItem("financialAid"));
var semfinalCost = Math.round(localStorage.getItem("finalCost"));

semTuition = semTuition;
document.getElementById("calcTuitionCost").innerHTML = toString(semTuition);

semRent = addCommas(semRent);
document.getElementById("calcRoomBoard").innerHTML = toString(semRent);

semBooksSupplies = addCommas(booksSuppliesCost);
document.getElementById("calcBooksSupplies").innerHTML = semBooksSupplies;

semPersonalExpenses = addCommas(semPersonalExpenses);
document.getElementById("calcPersonalExps").innerHTML = semPersonalExpenses;

semTravelCost = addCommas(semTravelCost);
document.getElementById("calcTransExps").innerHTML = semTravelCost;

semFinancialAid = addCommas(semFinancialAid);
document.getElementById("calcFinancialAid").innerHTML = semFinancialAid;

semfinalCost = addCommas(semfinalCost);
console.log("semfinalCost = " + semfinalCost);
document.getElementById("calcFinalCost").innerHTML = semfinalCost;
