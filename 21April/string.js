// STRING
var name = "komal";
var age = "22";


// concatination
var text = "My name is " + name +" " + " i am "+ age + "years old";
console.log(text);


// Template Literal or strings backticks
var text2  = `My name is ${name} and i am ${ age} years old`;
console.log(text2);

// PROPERTIES OF STRING

var x = "hello world";
// 1. type of
console.log(typeof x);

// length
var output = x.length;
console.log(output);

// char At() - returns the character at specific index number

output = x.charAt(0);
output = x[0];
console.log(output);

// indexof - gives the first index of any character 
output = x.indexOf("e");

// trim - removes the whitespace from the string
output = x.trim();
console.log(output);

// includes - returns true or false
output = x.includes("hell");
console.log(output);

// replace -