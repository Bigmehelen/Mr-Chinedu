const prompt = require("prompt-sync")();

const salesCalculator = function(number){

	let items = [239.99, 129.75, 99.95, 350.89]
	let wages = 200
	let total = 0
	let price = 0
	console.log('Items\t\tValue')

	for (let count = 1; count < items.length; count++){
	
		console.log(`${count}\t\t${items[count]}`);
	}
		for(let index = 1; index < items.length; index++){
	
		let userInput = Number(prompt("Enter item sold: "))

		}
		total = wages + userInput * 0.09;
		return total

}
salesCalculator(239)
console.log(total)
