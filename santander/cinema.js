function calculaGostos(notas) {
    var nNaoGostaram = 0
    var nMediano = 0
    var nGostaram = 0
    for (var i = 0; i < notas.length; i++) {
        if ((notas[i] == 0) || (notas[i] == 1)) {
            nNaoGostaram++
        } else if ((notas[i] == 2) || (notas[i] == 3)) {
            nMediano++
        } else {
            nGostaram++
        }
    }
    return [nNaoGostaram, nMediano, nGostaram]
}

notas = [5, 5, 5, 5, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0]
console.log(calculaGostos(notas))