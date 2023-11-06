//For of - Estrutura de repetição

const frutas = ['Pera', 'Maçã', 'Uva']
for (let fruta of frutas){
    console.log(fruta)
}

frutas.forEach((element, index) => {
    console.log(element, index)
})