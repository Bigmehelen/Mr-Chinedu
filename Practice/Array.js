ArrayOne = [1, 2, 2];
ArrayTwo = [2, 5, 7];

Array = [...ArrayOne, ...ArrayTwo];
//Array = ArrayOne.concat(ArrayTwo)
ArrayUniqueNumber = [...new Set(Array)]

console.log(ArrayUniqueNumber);
 

