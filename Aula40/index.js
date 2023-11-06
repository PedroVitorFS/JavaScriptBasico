//break e continue

const numeros = [1, 2, 3, 4,5, 6, 7, 8, 9]
for (let numero of numeros){
    if(numero ===2){
        continue //pula para a proxima iteração
    }
    console.log(numeros)
}

for (let numero of numeros){
    if(numero == 2){
        break // para o loop quando encontrar o numero 2
    }
}