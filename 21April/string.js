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

// replace - one to be replaced , new value
output = x.replace("hello", "bye");
console.log(output);

// substring (starting index , ending indexing)
output = x.substring(0,3);
console.log(output);

// slice
output = x.slice(0,5)
console.log(output);

// uppercase
output = x.toUpperCase();
console.log(output);

// lowercase
output = x.toLowerCase();
console.log(output);

// uppercase
var mytext = "javascript";
 mytext = mytext.charAt(0).toUpperCase() + mytext.substring(1);
console.log(mytext);


