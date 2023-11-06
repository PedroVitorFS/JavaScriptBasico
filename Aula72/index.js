//Getters e Setters
//Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque

    let estoquePrivado = estoque
    Object.defineProperty(
        this, //referencia este objeto que está sendo criado
         'estoque', 
         {
        enumerable : true, //faz com que seja exibido
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }
            estoquePrivado = valor
        },
        configurable: true // ela é reconfigurável
    })

    Object.defineProperties(this, {
        nome : {
            enumerable : true, //faz com que seja exibido
            value: nome ,  //valor
            writable: false, // o valor não pode ser alterável
            configurable: true // ela é reconfigurável
        }, 
        preco: {
            enumerable : true, //faz com que seja exibido
            value: preco ,  //valor
            writable: false, // o valor não pode ser alterável
            configurable: true // ela é reconfigurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1.nome)
console.log(Object.keys(p1))
