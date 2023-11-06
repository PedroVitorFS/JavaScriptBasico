//first -class objects (objetos de primeira classe)
const souUmDado = function(){
    console.log('Sou um dado')
}

souUmDado()

function executaFuncao(funcao){
    console.log('vou executarsua função abaixo')
    funcao()
}

executaFuncao(souUmDado)

const funcaoArrow = ()=>{
    console.log('Sou uma function')
}

funcaoArrow()

//dentro de um objeto 
const obj =  {
    falar: function(){
        console.log('Estou falando')
    }
}

obj.falar()