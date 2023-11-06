//While e Do While
const min = 1
const max = 50


function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = random(1, 50)
while(rand !== 10){
    rand = random(1, 50)
    console.log(rand)
}

do{ // executa pelo menos um avez
    rand = random(min, max)
    console.log(rand)
}while(rand !== 10);