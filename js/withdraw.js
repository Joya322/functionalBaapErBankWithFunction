document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFeildValueById("new-withdraw");

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid amount");
    return
  }
  const previousTotalWithdrawAmount = getTextElementValueById("total-withdraw");

  const previousTotalBalance = getTextElementValueById("total-balance");
  if (newWithdrawAmount > previousTotalBalance) {
    alert("Insufficient amount. Please provide a valid amount");
    return;
  } else {
    const currentWithdrawAmount = previousTotalWithdrawAmount + newWithdrawAmount;

    setTextElementValueById("total-withdraw", currentWithdrawAmount);

    
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    setTextElementValueById("total-balance", currentTotalBalance);
  }
});
