function vetorParImpar(vetor) {
  let impar = 0;
  let par = 0;
  for (let i in vetor) {
    if (vetor[i] % 2 == 0) {
      par++;
    } else {
      impar++;
    }
  }
  return `Qtd de Pares: ${par}, Qtd de Impares: ${impar}`;
}

vetor = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];

console.log(vetorParImpar(vetor));
