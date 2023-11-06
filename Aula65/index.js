//Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos

//Retorne os número maiores que 10
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
filtrados = numeros.filter((numero, indice, array)=>{return numero>10})
console.log(filtrados)

const numerosFiltrados = numeros.filter(valor => valor> 10)

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a 
const pessoas = [
    {nome: 'Luiz', idade: 62}, 
    {nome: 'Maria', idade: 23}, 
    {nome: 'Eduardo', idade: 55}, 
    {nome: 'Letícia', idade: 19}, 
    {nome: 'Rosana', idade: 32}, 
    {nome: 'Wallace', idade: 47}, 
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter(valor => valor.idade > 50)
const nomeTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))