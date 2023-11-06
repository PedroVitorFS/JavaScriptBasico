//Revisão arrays

const nomes = ['Eduardo', 'Maria', 'Joana']
const novo = nomes
nomes[2] = 'João'
delete nomes;
novo.pop() //alteração no novo também alteram os nomes
console.log(nomes)

const nomes2 = ['Eduardo', 'Maria', 'Joana']
const novo1  = [...nomes2] //uma copia de nomes
novo1.shift() //exclui a primeira posição e realoca os posteriores
novo1.unshift('João' )//adiciona ao primeiro indice e realoca os posteriores
console.log(nomes2)