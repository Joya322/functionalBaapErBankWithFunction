document.getElementById("deposit-btn").addEventListener("click", function () {
    const newDepositAmount = getInputFeildValueById("new-deposit");
    if (isNaN(newDepositAmount)) {
        alert("Please provide a valid amount");
        return
    }
  const previousTotalDepositAmount = getTextElementValueById("total-deposit");

    const currentDeposit = previousTotalDepositAmount + newDepositAmount;

    setTextElementValueById("total-deposit", currentDeposit);

    const previousTotalBalance = getTextElementValueById("total-balance");

    const currentTotalBalance = previousTotalBalance + newDepositAmount;

    setTextElementValueById("total-balance", currentTotalBalance)
    // console.log(previousTotalDepositAmount);
});
