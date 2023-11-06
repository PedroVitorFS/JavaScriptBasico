function funcao(){
    console.log(arguments) //arguments não possui em arrowfunction
}

funcao('valor', 1,2,3,4,5,6,)

function funcao1(a, b){
    b = b || 2;
    console.log(b)
}

function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao2({nome: 'Luiz', sobrenome : 'Otávio', idade: 20})


function funcao3([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}

funcao3(['Luiz Otávio', 'Miranda', 30])


const conta = function(operador, acumulador, ...numeros){//o resto é chamado hashoperator 
    for(let numero of numeros){
        acumulador = eval( `${acumulador}  + ${operador} + ${numero}`)
    }

    console.log(acumulador)
}

 function conta (operador, acumulador, ...numeros){//o resto é chamado hashoperator 
    for(let numero of numeros){
        acumulador = eval( `${acumulador}  + ${operador} + ${numero}`)
    }

    console.log(acumulador)
}


const conta = (operador, acumulador, ...numeros) => {//o resto é chamado hashoperator 
    for(let numero of numeros){
        acumulador = eval( `${acumulador}  + ${operador} + ${numero}`)
    }

    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)