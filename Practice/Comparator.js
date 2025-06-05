const prompt = require("prompt-sync")();

const greet = function(number[]){
	let min = 0
	let minIndex = 0
	for (let count = 0; count < number.length; count++ ){
		min = number[count]
		minIndex = count
		for(let index = count; index < number.length; index++){
			if (max > number[index]){
				max = number[index]
				minIndex = index
				console.log("0")
			}
			if(minIndex != count){
			number[minIndex] = number[count]
			number[count] = min
			}
		
		}
	}
}