//função splice
//                         -5         -4         -3            -2         -1
//                          1           2           3             4           5  
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
const removidos =  nomes.splice(3, 2)

const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
const removidos2 = nomes2.splice(-2, 2)


const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
const removidos3 =  nomes3.splice(2, 3, 'Luiz', 'Otávio')
console.log(nomes3, removidos3)

//simular o push
nomes3.splice(nomes3.length, 0, 'Ultimo')

//simular o unshift
nomes3.splice(0, 0, 'Primeiro')