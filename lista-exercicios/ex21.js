function convenio(idade) {
  let valor = 100;
  if (idade < 10) {
    valor += 80;
  } else if (idade > 10 && idade <= 30) {
    valor += 50;
  } else if (idade > 30 && idade <= 60) {
    valor += 95;
  } else if (idade > 60) {
    valor += 130;
  }
  return valor;
}

console.log(convenio(65));
console.log(convenio(55));
console.log(convenio(25));
console.log(convenio(5));
