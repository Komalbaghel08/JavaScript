const person = {
    name:'komal',
    age: 21,
    eligible : true,
    address:{
        street : 13
    },
    hobbies:["dance","sports"],

    hello: function(){
        console.log("hii")
    }

}

console.log(person.name);
console.log(person['address']);

// update value

 person.name = "komal";
//  add new property
 person.address.city = "bhopal";
 console.log(person);

//  add new function

person.dispaly = function(){
    console.log("hello friend")
};

// spread operator--> spread operator copy a part of an array or object  into another another array or object
const obj1 = {
    a:1,
    b:4
}

const obj2= {
c:3,
d:4,
};
const obj3 = {...obj1,...obj2};
console.log(obj3);

// Array of an object
const list = [
    {name: "harry", age:45 },
    {name:'Ron',age:56},
    {name:"hagrid", age:56},
    {name:"dumbledore", age:400},
];
console.log(list[1].name);
console.log(list[3].name + " " +list[3].age);
console.log(`${list[3].name} ${list[3].age}`);

// Destructuring in Array and object---- very very very important
const arr = [1,2,3,4,5,6,7,8,9,10,11]
// let a = arr[0];
// let a = arr[1];

// destructuiring with spread operator
const[a,b,c,d,...x] = arr;
// agr kisi word ko skip krna h to eha ka word  hta dege sirf comma lga dege
// const[a,,c,d,...x] = arr;
console.log(`${a} ${b} ${c} ${d}`);
console.log(`${x}`);


const car = {
    color: "black",
    model: "bmw",
    year: 2022,
};
// let y = car.color;
// let z = car.model;

// same name as property
// const { color,model,year } = car;
// console.log(color+" "+ model +" "+year);

// Aliyas
const {color:y, model:z, year:q} = car;
console.log(y+z+q);