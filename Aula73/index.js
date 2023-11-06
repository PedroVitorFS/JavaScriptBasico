//Já  vimos
//Object.keys (retorna as chaves)
//Object.freeze (congela o objeto)
//OBject.defineProperties (define várias propriedades)
//Object.defineProperty (define uma propriedade)

const  produto = {nome: 'Caneca', preco: 1.8}
const caneca = Object.assign({},produto, {material : 'porcelana'} ) //copia tudo para o  target
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //mostra as propriedades da chave do objeto
console.log(Object.values(produto))//mostra os valores 
console.log(Object.entries(produto))//mostra arrays  com as chaves e outros com os valores
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}