function arredonda(n) {
    return `R$ ${n.toFixed(2).toString().replace(".", ",")}`
}

console.log(arredonda(0.1 + 0.2))