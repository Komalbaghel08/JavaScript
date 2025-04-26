// Array literal
const number = [1,2,3,4,5,6];
const fruit = ["apple","grapes","banana"];
const mixed = [23,"hello",true,{name:"john"}];

// index
// console.log(number[0]);
console.log(fruit[2]);

// agr pura object chahiye toh
console.log(mixed[3]);
// agr sirf name chahiye to
console.log(mixed[3].name);

// array constructor
const name = new Array("ram","shayam","rahul","ravi");
console.log(name);

// empty array 
const color = [];
color[0] = "red";
color[1] = "blue";
color[2] = "yellow";
console.log(color);
console.log(`my fav color is ${color[1]}`);

// push = add an element to the end of array
number.push(8);
// returns the length of an array
console.log(number.length);
console.log(number);

// pop = remove the last an element of an array
number.pop();
console.log(number);
// unshift adda an element to the start of an array
number.unshift();
console.log(number);
// shift remove an elemnt to the start of an array
number.shift();
console.log(number);

// slice = extract or returns the number of elements from an array
// (starting index to ending not included) also it doesnot change the original array
let x;
x = number.slice(0,3);
console.log(x);
console.log(number);

// splice = it ois similar to slice but second parameter that is the number or elements to remove
// it changes the originaal array
x = number.splice(1,3);
console.log(x);
console.log(number);