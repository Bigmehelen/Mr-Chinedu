let total = 0;
let miles_per_gallon = 0;
let count = 0;
let miles = 0;

const prompt = require("prompt-sync")();

miles = Number(prompt("Enter amount of miles driven or -1 to end: "))
while (miles != -1){
	if (miles == -1){ 
		break
	}
	gallon = Number(prompt("Enter amount of gallon used: "))
	if (gallon == -1){
		break
	}
	
	miles_per_gallon = miles / gallon
	total = total + miles_per_gallon
	console.log("The miles per gallon for this tank is: " , miles_per_gallon)
	count += 1
	
		
	miles = Number(prompt("Enter amount of miles driven or -1 to end: "))
	if (miles == -1){
	break
		}
	}
	
	if (total > 0){	
	let average = total / count
	console.log("The overall average miles/gallon is: ", average)
	}
	else{ 
	console.log("No input collected")
	}










