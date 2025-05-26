//  Que --> Create an arrow function that takes a String as an argument & returns the number of woels in the string

const countVow = (str) =>{
     let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
//   console.log(count);
return count;
}