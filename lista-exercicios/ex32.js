function mediaVetores(vetor) {
  soma = 0;
  for (let i in vetor) {
    soma += vetor[i];
  }
  let media = soma / vetor.length;

  return media;
}

vetor = [5, 10];

console.log(mediaVetores(vetor));
