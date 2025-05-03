const person ={
    id:1,
    name: "harry potter",
    age:34,
    city:"london",
};

// object convert to json string
const data = JSON.stringify(person);

console.log(person);
console.log(data);

// json string to object
const mydata = JSON.parse(data);
console.log(mydata);

const library = []