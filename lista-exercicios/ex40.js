function conceitos(vetor) {
    for (let i in vetor){
        if (vetor[i] >= 0 && vetor[i] <= 4.9){
            console.log(`Nota ${vetor[i]}: Conceito D`)
        }
        if (vetor[i] >= 5 && vetor[i] <= 6.9){
            console.log(`Nota ${vetor[i]}: Conceito C`)
        }
        if (vetor[i] >= 7 && vetor[i] <= 8.9){
            console.log(`Nota ${vetor[i]}: Conceito B`)
        }
        if (vetor[i] >= 9 && vetor[i] <= 10){
            console.log(`Nota ${vetor[i]}: Conceito A`)
        }
    }
}

conceitos([0, 5.5, 8.5, 10])