const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

cashGiven.disabled = true;

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideError();
  if (billAmount.value > 0) {
    if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showError("Hey, Dont you have money?");
    }
  } else {
    showError("Invalid Bill Amount");
  }
});

billAmount.addEventListener("input", (e) => {
  if (e.target.value != "") {
    cashGiven.disabled = false;
  } else {
    cashGiven.disabled = true;
  }
});

function hideError() {
  message.style.display = "none";
}

function showError(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
