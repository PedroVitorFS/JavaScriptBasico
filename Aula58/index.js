//Funções construtoras - objetos
function Pessoa(nome, sobrenome){
    //atributos ou métodos
    this.nome = nome
    this.sobrenome = sobrenome

    const metodoInterno  = function(){
        
    }

    this.metodo = function(){
        console.log('sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')
p1.metodo()