//function factories

function criaPessoa(nome, sobrenome, a, p){
    return {
         nome,
         sobrenome, 
         //Getter
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
         },
         //Setter
         set nomeCompleto(valor){
            valor  = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
         },
         fala (assunto = 'falando sobre NADA.'){
            return ` ${nome} está ${assunto}`
         },
         altura : a,
         peso : p, 
         imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
         },
         //Getter
         get getimc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
         },
         //Setter
    }
}

const p1 = criaPessoa( 'Luiz', 'Otávio', 1.8, 80)
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc())
console.log(getimc)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)