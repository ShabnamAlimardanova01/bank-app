const balance = document.querySelector("#balance");
const transactionHistory = document.querySelector("#transaction-history");

const banAccount = {
  balance: 0,
  history: [],
  
  addbalance: function(money) {
    this.balance += parseFloat(money);
    this.history.push(`Deposited $${money}`);
    this.showBalance();
    this.showHistory();  
  },
  
  withdrawBalance: function(money) {
    if (this.balance < money) {
      alert("Insufficient balance.");
    } else {
      this.balance -= money;
      this.history.push(`Withdrew $${money}`);
      this.showBalance();
      this.showHistory(); 
    }
  },
  
  showBalance: function() {
    balance.innerHTML = `$${this.balance.toFixed(2)}`;  
  },
  
  showHistory: function() {
    transactionHistory.innerHTML = '';  
    console.log(transactionHistory);
    
    for (let i = 0; i < this.history.length; i++) {
      const li = document.createElement("li");
      li.textContent = this.history[i];  
      transactionHistory.appendChild(li);
    }
  },
};

document.querySelector("#btn-deposit").addEventListener("click", () => {
  const depositAmountInput = document.querySelector("#deposit-amount");
  const depositAmount = parseFloat(depositAmountInput.value);
  
  if (depositAmount > 0) {
    banAccount.addbalance(depositAmount);
    depositAmountInput.value = ''; 
  } else {
    alert("Please enter a valid amount to deposit.");
  }
});

document.querySelector("#btn-withdraw").addEventListener("click", () => {
  const withdrawAmountInput = document.querySelector("#withdraw-amount");
  const withdrawAmount = parseFloat(withdrawAmountInput.value);
  
  if (withdrawAmount > 0) {
    banAccount.withdrawBalance(withdrawAmount);
    withdrawAmountInput.value = ''; 
  } else {
    alert("Please enter a valid amount to withdraw.");
  }
});