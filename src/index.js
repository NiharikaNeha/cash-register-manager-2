var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var errorMsg = document.querySelector("#error-msg");
var checkBtn = document.querySelector("#check-btn");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000, 500, 100, 20, 10, 5, 1];

function btnHandler() {
  showErrorMessage("");
  var bill = billAmt.value;
  var cash = cashGiven.value;
  var diff = cash - bill;
  if (bill > 0) {
    if (diff >= 0) {
      for (var i = 0; i < notes.length; i++) {
        noOfNotes[i].innerText = Math.trunc(diff / notes[i]);
        diff %= notes[i];
      }
    } else {
      showErrorMessage("Cash given should be atleast equal to the bill amount");
    }
  } else {
    showErrorMessage("Bill amount should be positive");
  }
}

function showErrorMessage(message) {
  errorMsg.innerText = message;
}

checkBtn.addEventListener("click", btnHandler);
