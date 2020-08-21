function negativos(vetor) {
  let negativos = 0;
  for (let i in vetor) {
    if (vetor[i] < 0) {
      negativos++;
    }
  }
  console.log(negativos);
}

vetor = [-589, 1, 0, -218, -58, 47, 3, 3];

negativos(vetor);
