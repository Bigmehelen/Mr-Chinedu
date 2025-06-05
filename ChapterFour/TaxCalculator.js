const prompt = require("prompt-sync")();

const greet = function(number){
	let taxMax = 30_000
	
	for (let index = 1; index < 3; index++){
	let name = prompt("Enter your name: ")
	let earnings = Number(prompt("Enter your earning: "))
		let result = 0
		let taxName = " "
		if (earnings > 30_000){
			let rate = 0.20 * earnings
			result = earnings - rate
			taxName = name
		console.log(`${taxName} tax rate is:  ${result}`)
		console.log()
		}
		
			let secondTaxName = " "
			let resultOne = 0
		if (earnings <= 30_000){
			let rate = 0.15 * earnings
			resultOne = earnings - rate
			secondTaxName = name
	console.log(`${secondTaxName} tax rate is: ${resultOne}`)
	console.log()
		}
		
	}


}
greet(30_000)



