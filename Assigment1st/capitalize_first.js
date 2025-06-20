
let wor = prompt('Enter any sentence: ')

const capital = (sentence)=>{
    let word = sentence.split(' ')

    for(var i = 0; i < word.length; i++){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    }

    return word.join(' ');
}

let upper_fir = capital(wor)
console.log(upper_fir)