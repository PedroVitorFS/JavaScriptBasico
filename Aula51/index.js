function falaFrase(comeco){
    function falaResto(resto){
        return `${comeco} ${resto}`
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá')
const resto = (olaMundo('mundo'))
console.log(resto)


function duplica(n){
    return n*2
}
function triplica(n){
    return n*2
}
function quadriplica(n){
    return n*3
}


function criaMultiplicador(multiplicador){
    function multiplicacao(n){
        return multiplicador * n
    }
    return multiplicacao
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)

console.log(duplica(3))