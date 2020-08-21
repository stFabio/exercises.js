function intervalo(vetor) {
  let dentro = 0;
  let fora = 0;
  for (let i in vetor) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      dentro++;
    } 
    if (vetor[i] < 10 || vetor[i] > 20) {
      fora++;
    }
  }
  return `Dentro do intervalo: ${dentro}, Fora do intervalo: ${fora}`;
}

vetor = [10, 11, 12, 13, 15, 20, 22, 7, 4];

console.log(intervalo(vetor));
