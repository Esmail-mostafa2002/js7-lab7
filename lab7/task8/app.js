// app.js
import BankAccount from "./bankAccount.js";

const acc1 = new BankAccount("1001", 1000, "savings");
const acc2 = new BankAccount("1002", 500, "checking");

acc1.deposit(200);
acc1.withdraw(100);
acc1.transferFunds(300, acc2);
acc1.applyInterest(5);

console.log("Acc1 Summary:", acc1.getAccountSummary());
console.log("Acc2 Summary:", acc2.getAccountSummary());

console.log("Acc1 Transactions:", acc1.getTransactionHistory());
console.log("Acc2 Transactions:", acc2.getTransactionHistory());
