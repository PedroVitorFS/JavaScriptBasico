//Map

//dobre os números
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrados = numeros.map(valor=>valor*2)
console.log(numerosDobrados)

//Para cada elmento:
// Retorne apenas um string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23}, 
    {nome: 'Eduardo', idade: 55}, 
    {nome: 'Letícia', idade: 19}, 
    {nome: 'Rosana', idade: 32}, 
    {nome: 'Wallace', idade: 47}, 
]

const nomes = pessoas.map(valor => valor.nome);
//const idades = pessoas.map(valor => delete valor.nome) //deleta os nomes no array original
const idades2 = pessoas.map(valor => ({idade: valor.idade}) )
const comids = pessoas.map((valor, indice) => ({indice: indice,...valor}))

console.log(comids)

comids2 = pessoas.map(function(valor, indice){
    valor.id = indice //alterando o array original 
    return valor
})