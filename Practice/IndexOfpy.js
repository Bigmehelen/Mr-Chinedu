let max = 0
let numbers = [1, 5, 3, 4, 5, 5]
const largest = function(number){

	for (let value in numbers){

		if(max > numbers[value]){
			max = numbers[value]
		}
	}
	console.log(numbers[value])

}
largest(5)