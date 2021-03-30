function maiorQueNum(numeros, num){
    resultado = []
    for (var i = 0; i <= numeros.length; i++){
        if (numeros[i] > num){
            resultado.push(numeros[i])
        }
    }
    return resultado    
}

numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5

console.log(maiorQueNum(numeros, num))