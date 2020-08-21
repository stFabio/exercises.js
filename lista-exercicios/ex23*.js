function calculaNota(codigo, n1, n2, n3) {
  let notas = [];
  notas.push(n1);
  notas.push(n2);
  notas.push(n3);
  notas.sort((a, b) => (a < b ? 1 : -1));

  let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
  return `Código do aluno: ${codigo}, nota 1: ${notas[0]}, nota 2: ${
    notas[1]
  }, nota 3: ${notas[2]}. Média Final: ${mediaFinal}. ${
    mediaFinal >= 5 ? "Aprovado" : "Reprovado"
  }.`;
}
console.log(calculaNota(123, 10, 5, 10));
console.log(calculaNota(1, 10, 0, 0));
