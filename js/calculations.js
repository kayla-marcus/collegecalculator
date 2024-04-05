// Start of calculations.js

var semesterTuition = 0;
function calculateTuition() {
    // Read the amount of credits the student is taking
    let creditLoad = parseInt(document.getElementById("creditCount").value);
    if(isNaN(creditLoad)) {
        creditLoad = 0;
    }

    const regTuition = 203.77;
    const onlineTuition = 219.27;
    const nursingADBS = 238.92;
    const nursingPN = 232.92;
    const vetTech = 225.42;
    const senCit = 33.7;

    // Online enrollment calculations
    if(document.getElementById("attendOnlineYes").checked) {
        //console.log("Yes is checked");
        semesterTuition = creditLoad * onlineTuition;
        //console.log("semesterTuition = " + semesterTuition);
    }
    else {(document.getElementById("attendOnlineNo").checked)
        //console.log("No or nothing is checked")
        semesterTuition = creditLoad * regTuition;
    }

    // Program enrollment calculations
    if(document.getElementById("nursingASBS").checked) {
        //console.log("nursing1 checked")
        semesterTuition = creditLoad * nursingADBS;
        //console.log("semesterTuition = " + semesterTuition);
    }
    else if (document.getElementById("nursingPractical").checked) {
        //console.log("nursingPrac checked")
        semesterTuition = creditLoad * nursingPN;
        //console.log("semesterTuition = " + semesterTuition);
    }
    else if (document.getElementById("vetTech").checked) {
        //console.log("vetTech checked")
        semesterTuition = creditLoad * vetTech;
        //console.log("semesterTuition = " + semesterTuition);
    }
    else {(document.getElementById("otherProgram").checked && semesterTuition == 0)
        //console.log("other checked")
        semesterTuition = creditLoad * regTuition;
        //console.log("semesterTuition = " + semesterTuition);
    }

    // 62+ enrollment calculations
    if(document.getElementById("ageSixtyTwoYes").checked) {
        semesterTuition = creditLoad * senCit;
        //console.log("semesterTuition = " + semesterTuition);
    }
    else {(document.getElementById("otherProgram").checked && semesterTuition == 0)
        //console.log("other checked")
        semesterTuition = creditLoad * regTuition;
        console.log("semesterTuition = " + semesterTuition);
    }
}

var semesterRent = 0;
function calculateRoomBoard() {
    // Either add specified rent amount or add 0
    if(document.getElementById("offCampusYes").checked) {
        let rentAmount = parseInt(document.getElementById("rentAmount").value);
        console.log("rentAmount is equal to " + rentAmount);
        semesterRent = rentAmount * 4;
        //console.log("semesterRent = " + semesterRent);
    }
    else{
        semesterRent = 0;
        //console.log("semesterRent = " + semesterRent);
    }
}

var bookCost = 0;
function calculateBooks() {
    if(document.getElementById("bookbuyingRent").checked) {
        bookCost = 150;
        //console.log("Book cost = " + bookCost);
    }
    else if(document.getElementById("bookbuyingBuy").checked) {
        bookCost = 300;
        //console.log("Book cost = " + bookCost);
    }
    else if(document.getElementById("bookbuyingUncertain").checked) {
        bookCost = 225;
        //console.log("Book cost = " + bookCost);
    }
    else {
        //console.log("Nothing is checked in book costs.")
    }
}

var suppliesCost = 0;
var checkBackpack = true;
var checkPlanner = true;
var checkGenSupplies = true;
var checkLaptop = true;
var checkLabEquipment = true;
function calculateSupplies() {
    // Check if checkboxes are checked
    if(document.getElementById("backpack").checked && checkBackpack) {
        suppliesCost += 50;
        checkBackpack = false;
    }
    if(document.getElementById("planner").checked && checkPlanner) {
        suppliesCost += 10;
        checkPlanner = false;
    }
    if(document.getElementById("genSupplies").checked && checkGenSupplies) {
        suppliesCost += 80;
        checkGenSupplies = false;
    }
    if(document.getElementById("laptop").checked && checkLaptop) {
        suppliesCost += 800;
        checkLaptop = false;
    }
    if(document.getElementById("labEquipment").checked && checkLabEquipment) {
        suppliesCost += 50;
        checkLabEquipment = false;
    }
    if(document.getElementById("none").checked) {
        suppliesCost += 0;
    }

    // Reduce cost is checkboxes were checked and then unchecked
    if(!document.getElementById("backpack").checked && !checkBackpack) {
        suppliesCost -= 50;
        checkBackpack = true;
    }
    if(!document.getElementById("planner").checked && !checkPlanner) {
        suppliesCost -= 10;
        checkPlanner = true;
    }
    if(!document.getElementById("genSupplies").checked && !checkGenSupplies) {
        suppliesCost -= 80;
        checkGenSupplies = true;
    }
    if(!document.getElementById("laptop").checked && !checkLaptop) {
        suppliesCost -= 800;
        checkLaptop = true;
    }
    if(!document.getElementById("labEquipment").checked && !checkLabEquipment) {
        suppliesCost -= 50;
        checkLabEquipment = true;
    }
    //console.log("supply cost = " + suppliesCost);
}

var travelCost = 0;
function calculateTravelCost() {
    if(document.getElementById("travelYes").checked) {
        let milesAway = parseInt(document.getElementById("milesAway").value);
        //console.log("milesAway is equal to " + milesAway);
        if(document.getElementById("travelModeDrive").checked) {
            let MPG = parseInt(document.getElementById("MPG").value);
            travelCost = (((milesAway / MPG) * 3.50) * 2) * 70;
            //console.log("drive cost is " + travelCost);
        }
        else if(document.getElementById("travelModeCarpool").checked) {
            travelCost = (milesAway * 0.2765) * 70;
            //console.log("carpool cost is " + travelCost);
        }
        else if(document.getElementById("travelModeBus").checked) {
            if(milesAway > 0 && milesAway < 15) {
                travelCost = (2.00 * 2) * 70;
                //console.log("bus cost is " + travelCost);
            }
            else if(milesAway > 14 && milesAway < 25) {
                travelCost = (3.00 * 2) * 70;
                //console.log("bus cost is " + travelCost);
            }
            else if(milesAway > 24 && milesAway < 35) {
                travelCost = (4.00 * 2) * 70;
                //console.log("bus cost is " + travelCost);
            }
            else if(milesAway > 34) {
                travelCost = (5.00 * 2) * 70;
                //console.log("bus cost is " + travelCost);
            }
        }
        if(document.getElementById("travelModeUncertain").checked) {
            travelCost = ((milesAway * 0.17) * 2) * 70;
            //console.log("uncertain cost is " + travelCost);
        }
    }
    else if(document.getElementById("travelNo").checked) {
        //console.log("travelNo was checked");
    }
    else if(document.getElementById("travelUncertain").checked) {
        //console.log("travelUncertain was checked");
    }
}

var personalExpenses = 0;
function calculatePersonalExpenses() {
    let oneTimeExpense = parseInt(document.getElementById("oneTimeExpense").value);
    let monthlyExpense = parseInt(document.getElementById("monthlyExpense").value);
    if(isNaN(oneTimeExpense)) {
        oneTimeExpense = 0;
    }
    if(isNaN(monthlyExpense)) {
        monthlyExpense = 0;
    }

    personalExpenses = (monthlyExpense * 4) + oneTimeExpense;
    //console.log("personal expenses for the semester = " + personalExpenses);
}

var financialAid = 0;
function calculateFinAid() {
    if(document.getElementById("financialAidYes").checked) {
        financialAid = parseInt(document.getElementById("finAidAmount").value);
        //console.log("financial aid = " + financialAid);
    }
    else {
        financialAid = 0;
    }
}

function calculateFinalCost() {
    // Store all in-between variables in local storage
    calculateTuition();
    calculateRoomBoard();
    calculateBooks();
    calculateSupplies();
    calculateTravelCost();
    calculatePersonalExpenses()
    calculateFinAid();

    var booksSuppliesCost = bookCost + suppliesCost;
    
    localStorage.setItem("semesterTuition", semesterTuition);
    localStorage.setItem("semesterRent", semesterRent);
    localStorage.setItem("booksSuppliesCost", booksSuppliesCost);
    localStorage.setItem("travelCost", travelCost);
    localStorage.setItem("personalExpenses", personalExpenses);
    localStorage.setItem("financialAid", financialAid);

    // Actual Calculation
    totalCost = (semesterTuition + semesterRent + booksSuppliesCost + travelCost + personalExpenses);
    finalCost = (totalCost - financialAid);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("finalCost", finalCost);

    console.log("finalCost = " + finalCost);
}