// 4 ways of function

// no returns & no parameter
function display(){
    console.log("hello");
}
display();

// no returns with parameter
function add(num1,num2){
    console.log(num1 + num2);
}
add(10,20)
add(34,67)

// return with parameter
function multiple(num1,num2){
    return num1*num2;
}
let result = multiple(20,30);
// alert(result);
console.log(result);

// return with no parameter
function show(){
    return "hello"
}
let ans = show();
console.log(ans);


// cube
function cube(num3){
    return num3 * num3 * num3
}
let d = cube(3)
console.log(d);
// regula function  
// function expression
let cube1 = function (x){
    return x * x * x ;
};
console.log(cube1(10));

// arrow function -es6 feature
const print  = (name) => {
    console.log(name);
};
print("harry potter")