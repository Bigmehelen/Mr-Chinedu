/*collect input

const prompt = require("prompt-sync")();

let score = prompt ("What is your test Score? ");

console.log(score);

//Tenary Operator
let score = 60;

(score < 50)? console.log("fail"):console.log("pass")


let left_operand = 10;
let right_operand = 5;
let operator = 5;
let ans = 0
switch(operator){
	case 1: ans = left_operand + right_operand;
		console.log(ans);
		break;
	case 2: ans = left_operand - right_operand;
		console.log(ans);
		break;
	case 3: ans = left_operand * right_operand;
		console.log(ans);
		break;
	case 4: ans = left_operand / right_operand;
		console.log(ans);
		break;
	default:console.log(NaN);
}

	