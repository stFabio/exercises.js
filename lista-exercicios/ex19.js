function lanchonete(codigo, quantidade) {
    switch(codigo){
        case 100:
            console.log(`Total a pagar: R$ ${3.00 * quantidade}`);
            break;
        case 200:
            console.log(`Total a pagar: R$ ${4.00 * quantidade}`);
            break;
        case 300:
            console.log(`Total a pagar: R$ ${5.50 * quantidade}`);
            break;
        case 400:
            console.log(`Total a pagar: R$ ${7.50 * quantidade}`);
            break;
        case 500:
            console.log(`Total a pagar: R$ ${3.50 * quantidade}`);
            break;
        case 600:
            console.log(`Total a pagar: R$ ${2.80 * quantidade}`);
            break;
        default:
            console.log("Produto não existente")
    }
}

lanchonete(100, 2)
lanchonete(200, 2)
lanchonete(300, 2)
lanchonete(400, 2)
lanchonete(500, 2)
lanchonete(600, 2)
lanchonete(800, 2)
