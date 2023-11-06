//Manipulando prototypes

//new Object -> OBject.prototype

const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype 
}

const objB = {
    chaveB : 'B'
}

const objC = {
    chaveB : 'C'
}

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual /10))
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco + (this.preco * (percentual /10))
}

const p1 = new Produto('Camiseta', 50)
p1.desconto(100)
p1.aumento(100)

//Literal 
const p2 = {
    nome: 'Caneca', 
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)


const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 113
    }, 
    tamanho : {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 42
    }
}) // não seta o construtor
p3.aumento(10)
