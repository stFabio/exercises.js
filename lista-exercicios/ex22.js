function anuidade(mes, valor) {
  let pgto = 0;
  let atraso = mes - 1;
    if (mes >= 1 && mes <= 12){
      pgto = (valor * Math.pow(1 + 5 / 100, atraso)).toFixed(2);
      return pgto;
  } else {
      return "Valor inválido"
  }
}

console.log(anuidade(4, 100))