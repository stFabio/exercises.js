function maiorMenor(vetor) {
  let maior = vetor[0];
  let menor = vetor[0];
  for (let i in vetor) {
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
    if (vetor[i] < menor) {
      menor = vetor[i];
    }
  }
  return `Maior: ${maior}, Menor: ${menor}`
}

vetor = [589, 1, 0, -218, 58, 47, 3, 3];

console.log(maiorMenor(vetor));