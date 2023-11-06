const cpf = '70548445052'
const  inicioCpf = cpf.split('').slice(0, 9)
//const inicioCpf = Array.from(inicioCpf) // também poderia usar

function criaDigito(posicao){
    function calculaDigito(cpf){
        valor = cpf
        .map((valor, indice) => {
            return Number(valor)*(posicao + 9 - indice)
        })
        .reduce((acumulador, valor) => acumulador += valor, 0)
        resto = 11  - (valor % 11 );
        return  (resto > 9 ? 0 : resto).toString()
    }
    return calculaDigito
}

const criaPrimeirodigito = criaDigito(1)
const criaSegundodigito = criaDigito(2)

const primeiroDigito = criaPrimeirodigito(inicioCpf)
const segundoDigito = criaSegundodigito(inicioCpf.concat(primeiroDigito))

console.log(primeiroDigito, segundoDigito)

