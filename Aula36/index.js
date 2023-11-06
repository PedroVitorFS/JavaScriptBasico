//For in estrutura de repetição
const frutas = ['Pera', 'Maçã', 'Uva']

for (let index in frutas){
    console.log(frutas[index])
}

const pessoa = {
    nome: 'Luiz', 
    sobrenome: 'Otávio',
    idade: 30 
}

for (let chaves in pessoa){
    console.log(chaves)
}