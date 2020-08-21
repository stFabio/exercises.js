function nota(nota) {
  let notaFinal = arredondaNota(nota);
  if (notaFinal <= 40) {
    return `Reprovado com ${notaFinal}`;
  } else {
    return `Aprovado com ${notaFinal}`;
  }
}

function arredondaNota(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - nota % 5);
  } else {
    return nota;
  }
}

console.log(nota(100));
console.log(nota(44));
console.log(nota(38));
console.log(nota(85));
console.log(nota(88));
