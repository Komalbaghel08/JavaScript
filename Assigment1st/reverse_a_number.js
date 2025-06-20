let num = parseInt(prompt('Enter number: '))

const reverse = (number) => {
    temp = 0
    while(number > 0){
        last_digit = number % 10
        temp = (temp * 10)  + last_digit
        number = Math.floor(number / 10)
    }
    return temp
}

let reverse_num = reverse(num)
console.log(reverse_num)