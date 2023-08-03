// erankyun 1
let numbers = 6
let star = ''
for(let i = 0; i<= numbers; i++){
    for(let j = 0; j <= i; j++){
        star += '*'
    }
    star += '\n'
}
console.log(star);


// erankyun 2
let star2 = ''
let num1 = 8
for(let i = 0; i <= num1; i++){
    for(let j = 0; j <= i; j++){

    }
    for(let j = i; j <= num1; j++){
        star2 += '*'
    }
    star2 += '\n'
}
console.log(star2);


