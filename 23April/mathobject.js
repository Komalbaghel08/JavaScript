//it returns the value of pi
var a = Math.PI;
console.log(a);

console.log(Math.sqrt(100)); //it returns the result of square root of

// ceil,floor,tofixed,abs,max,min
let output;
output = Math.abs(-78);
console.log(output);

// takes the upper value and round off
output = Math.ceil(5.67);
console.log(output);

// Takes the lower value and round off
output = Math.floor(5.67);
console.log(output);

// Round figure
output = Math.round(4.96);
console.log(output);

// returns the integer  only
output = Math.trunc(8.77);
console.log(output);

// returns -1 if negative and 1 if num is positive
output = Math.sign(-9);
console.log(output);

// (x,y) returns x to the power of y
output = Math.pow(2, 4);
console.log(output);

// min returns the smallest number amongf all
output = Math.min(22, 45, 99, 100, 5);
console.log(output);

// max returns the smallest number amongf all
output = Math.max(22, 45, 99, 100, 5);
console.log(output);

// min returns the smallest number amongf all
output = Math.min(22,45,99,100,5);
console.log(output);

// returns the random number between 0 and 1
output = Math.random();
console.log(output);

// returns the random number between 0 and 10(10 ki jgh kuch aur v likh skte h)
output = Math.floor(Math.random()* 10);
console.log(output);


// practice question
x=Math.floor(Math.random()* 100) + 1;
y = Math.floor(Math.random()* 150)+1;
let sum,product,diff,remainder,ques;
 diff = x-y
console.log(diff);
product = x*y;
console.log(product);
remainder=x/y;
console.log(remainder);
ques=x%y;
console.log(ques);