//Atribuição por desestruturação (Objetos)
const pessoa =  {
    nome: 'Luiz', 
    sobrenome : 'Miranda', 
    idade: 30, 
    endereco : {
        rua : 'Av Brasil', 
        numero: 320
    }
};

const {nome: n, sobrenome, idade} = pessoa

console.log(n, sobrenome, idade)

const {endereco : {rua, numero}} = pessoa
console.log(rua, numero)

const {endereco} = pessoa
console.log(endereco)

const {nome, ...resto} = pessoa
console.log(resto)