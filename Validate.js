let visa = {
	issuer: "Visa",
	Valid: true
};

let master = {
	issuer: "Master",
	Valid: true
};
let discovery = {
	issuer: "Discover",
	Valid: true
};

let express = {
	issuer: "AmericanExpress",
	Valid: true
};

let visaCard = [4_000_000_000_000_000];
let masterCard = [5_000_000_000_000_000]
let discoveryCard = [6_000_000_000_000_000]
let americanExpress = [30_000_000_000_000]

const prompt = require("prompt-sync")();

const validateAtm = function(number){

let userInput = Number(prompt("Enter Atm Card Number: "))

	if (userInput == visaCard){
	console.log(visa)
	}

	if (userInput == masterCard){
	console.log(master)
	}
	if (userInput == discoveryCard){
	console.log(discovery)
	}
	if (userInput == americanExpress){
	console.log(express)
	}
	else if(userInput != visaCard || masterCard || discoveryCard || americanExpress){
	console.log("Valid: false, reason: Invalid length")
	}
}
validateAtm()


