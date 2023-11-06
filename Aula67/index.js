//Reduce
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    return acumulador += valor
}, 0)

console.log(total)

//retorne um array com os pares (filter)
const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor %2 ===0 ) acumulador.push(valor)
    return acumulador
}, [])

console.log(pares)

//retorne um array com o dobro dos valores (map)
const dobro = numeros.reduce(function(acumulador, valor, indice, array){
    array.push(valor*2)
    return acumulador
}, []) 

//caso não coloque o valor no acumulador, ele utiliza o primeiro valor do array como valor inicial 

//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23}, 
    {nome: 'Eduardo', idade: 79}, 
    {nome: 'Letícia', idade: 19}, 
    {nome: 'Rosana', idade: 64}, 
    {nome: 'Wallace', idade: 47}, 
]

const maisVelha = pessoas.reduce(function(acumulador, valor, indice, array){
    if(valor.idade > acumulador.idade){
        acumulador = valor
    }
    return acumulador
})

console.log(maisVelha)