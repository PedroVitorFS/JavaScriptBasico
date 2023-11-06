//Prototypes
//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeCompleto = ()=> this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.estouAqui = 'Hahaha' //aumenta a performance do objeto, pois não precisa instanciar a função toda vez que criar um novo objeto
Pessoa.prototype.nomeCompleto =   () => this.nome + ' ' + this.sobrenome

//Pessoa.prototype === pessoa1.__proto__
// pessoa1 --> Pessoa.prototype --> Object.prototype
//instancia
const pessoa1 = new Pessoa('Luiz', 'O. ')
const pessoa2 = new Pessoa('Maria', 'A. ')
const data  = new Date()
console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)