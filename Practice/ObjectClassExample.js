let person = {
	name: "chinedu",
	age: 16,
	gender: "sheMale",
	password: "34567"
};
delete person.name
console.log(person)

person.color = "black";
person.password = "newpassword 1234";

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.entries(person));

//console.log(person.name)