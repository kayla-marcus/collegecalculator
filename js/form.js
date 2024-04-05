/* Template from W3 Schools */
/* https://www.w3schools.com/howto/howto_js_form_steps.asp */

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicatorTop(n)
  fixStepIndicatorBottom(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    var a = document.getElementById("submit-btn");
    a.href = "./results.html";
    window.location.href = "results.html";
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

// Unedited Version Below
// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("stepTop")[currentTab].className += " finish";
//     document.getElementsByClassName("stepBottom")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }


// Version 2
// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, inputsOnTab, sectionsOnTab, i, s, valid = true;
//   x = document.getElementsByClassName("tab");
//   inputsOnTab = x[currentTab].getElementsByTagName("input");
//   sectionsOnTab = x[currentTab].getElementsByTagName("section");
//   var section = 0;

//   // A loop that checks every section element in the shown in the current tab for the hidden class:
//   for (s = 0; s < sectionsOnTab.length; s++) {
//     console.log("There are " + sectionsOnTab.length + " sections on this tab.")
//     section++;
//     console.log("section = " + section);
//     if (!sectionsOnTab[s].classList.contains("hidden")) {
//       console.log("not a hidden hidden section");
//     } else {
//       break;
//     }
//     // A loop that checks every input field in the shown in the current tab:
//     for (i = 0; i < inputsOnTab.length; i++) {
//       // If a field is empty and input is required...
//       if (inputsOnTab[i].value == "" && !sectionsOnTab[s].classList.contains("hidden")) {
//         console.log("input needs to be added")
//         // add an "invalid" class to the field:
//         inputsOnTab[i].className += " invalid";
//         // and set the current valid status to false:
//         valid = false;
//       }
//       else if(inputsOnTab[i].value == "" && !inputsOnTab[i].classList.contains("text")) {
//         valid = true;
//         console.log("valid equals true")
//       }
//     }
//   }

// Version 3
function validateForm() {
  // This function validates each tab as it is completed
  var valid = true;
  if (valid) {
    document.getElementsByClassName("stepTop")[currentTab].className += " finish";
    document.getElementsByClassName("stepBottom")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}


function fixStepIndicatorTop(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("stepTop");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function fixStepIndicatorBottom(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("stepBottom");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}