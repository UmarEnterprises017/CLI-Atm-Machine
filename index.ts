#! /usr/bin/env node

import inquirer from "inquirer";

//Initialize user balance and pin code
let myBalance = 5000;
let myPin = 55555;

//print welcome message
console.log("\n\t Welcome to the ATM Machine\n");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code: "
    }
])
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, login successful!");
    console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "check Balance"]
        }
    ])


    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amouont to withdraw:"
            }
        ])

        if(amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }

        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
    }
        else if (operationAns.operation === "Check Balance") {
            console.log(`Your Account Balance is: ${myBalance}`);
        }
    } 
    
    else {
        console.log("Pin is incorrect, Try Again!");
    }