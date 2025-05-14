// const numbers = [1,2,3,4,5];
// const newArray = numbers.map(function(x){
//     return x*x;
// })
// console.log(newArray);

// const arr = [10,20,30,50];
// const newArray = arr.map(function(x){
//     return x*10;
// })
// console.log(newArray);

// Filter
const arr = [10,20,30,50];
const arr1 = arr.filter(display);
function display(x){
    return x>30;
}
console.log(arr1);