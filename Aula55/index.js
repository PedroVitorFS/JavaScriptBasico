// IIFE - funções imediatas
(function(idade, peso, altura){
    const sobrenome = 'Miranda'

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'))
    }

    falaNome()
    console.log(idade, pessoa, altura)
})(30, 80, 1.80)

const nome = "qualquer coisa" //constantes independentes