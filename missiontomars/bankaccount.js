'use strict';

class BankAccount {
    accountNumber;// this is the account number 
    owner;// name of the person that owns the account
    transactions;//this is the history of the account! 

    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];

    }
    balance(){
        //returns current amt
        //the balance is computed by summing in the transactions array

        //before we start set the sum to be 0 
        let currentBalance = 0;

        //loop through every transaction and get the amount of it,
        //and add up this amount to the sum variable
        for (let i = 0; i < this.transactions.length; i++){
            let currentTransaction = this.transactions[i];
            currentBalance += currentTransaction.amount;
        }
        return currentBalance;
    };
    deposit(amt){
        if(amt > 0){//this is to ensure that you cannot deposit a negative amount
            let newTrans = new Transaction(amt,'me');
            this.transactions.push(newTrans);
        }

   }
    
    charge(amt, payee){
        if (this.balance() < amt){// this is to ensure that we cannot charge anything that makes the account 
            //dip below ZERO
            return
        }
        let charge = new Transaction(-amt, payee );
        this.transactions.push(charge);
    }
};

class Transaction {
    date;
    amount;// positive amounts are money going into the account. Negative is money coming out 
    payee;

    constructor(amount, payee){
        //the date should be set to the current date automatically
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
};
let acct1 = new BankAccount(123, 'john smith');
console.log(acct1);// this should show us our newly made bank account for john smith NO TRANSACTIONS
acct1.deposit(150);
acct1.deposit(1000);
console.log(acct1.balance());// this will show that we have 1150 in the bank after the deposits that we made
console.log(acct1);//just to see what we are looking like! 
acct1.charge(900);//we have made a charge of 900 dollars to the account! 
console.log(acct1.balance());//this should say that we hace 250 dollars in the bank 


// describe("Test 1", function(){
//     it("Should let you deposit a positive amt", function(){
//         let acct1 = new BankAccount('6053', "Omar");
//         acct1.deposit(100)
//         assert.equal(100, acct1.balance())
//     })
//     it("Should let you charge a negative amt", function(){
//         let acct1 = new BankAccount('6053', "Omar");
//         acct1.deposit(100)
//         acct1.charge(50)
//         assert.equal(50, acct1.balance())
//     })
// })