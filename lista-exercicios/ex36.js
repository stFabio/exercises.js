function multiplicaTudo(vetor, valor){
    let resultado = [];
    for (let i in vetor){
       resultado.push(vetor[i] * valor);
    }
    return resultado;
}

function multiplicaMaiorQue5(vetor, valor){
    let resultado = [];
    for (let i in vetor){
        if (valor > 5){
            resultado.push(vetor[i] * valor);
        }
        else {
            return vetor;
        }
    }
    return resultado;
}

console.log(multiplicaTudo([5, 10, 25, 50], 2))
console.log(multiplicaMaiorQue5([5, 10, 25, 50], 2))
console.log(multiplicaMaiorQue5([5, 10, 25, 50], 10))