// // ask user to birth year and ask user to age
// let year = parseInt(prompt("enter : "))


// function birthYear(year) {
//    let  d = new Date()
//     let n = d - year
//     console.log(n)
// }

// birthYear(year);

//imidiate invoked function (iife)

// (function () {
//     let msg = "humara kuch na kuch toh hoga"
//     console.log(msg)
// })();




// const getCelcius = (f)=> {
//     let celcius = f - 32 * 5 / 9
//     console.log(celcius)
// }

// getCelcius(102)

// let l = 10
// let w = 5

( function (l, w) {
    let r = l * w
    console.log(r)
})(10,5);