const fruit = ["Mango", "Apple","Strawberry","Kiwi","grapes"];
// starting indexb element to remove,element to add
fruit.splice(0,2,"red","blue");
console.log(fruit);

// reverse
const fruit1 = ["Mango", "Apple","Strawberry","Kiwi","grapes"];
fruit1.reverse();
console.log(fruit1);

// include
console.log(fruit.includes(45));

// indexof
console.log(fruit.indexOf("red"));

// array covert to string
let x = fruit.toString();
x=fruit.join();
console.log(x,typeof x);

// string to array
x = x.split(" ");
console.log(x, typeof x);

// chaining
console.log(fruit.slice(1,4).reverse().toString().charAt());

// concatination
const num1 = [1,2,3,4,5,6];
const num2 = [10,20,30,40];
const numbers = num1.concat(num2);
console.log(numbers);

// spread operator(...)
const numbers2 = [...num1,...num2];
console.log(numbers2);

// TASK 1
const arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);

// TASK 2
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
const number3 = arr1.concat(arr2);
const  newArray = number3.splice(5,1)
console.log(number3);