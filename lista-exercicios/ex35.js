let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function juntaVetor(vetorInicio, vetorAdiciona) {
  for (let i in vetorAdiciona) {
    vetorInicio.push(vetorAdiciona[i]);
  }

  return `vetorAdiciona: ${vetorAdiciona}, vetorPilha (resultado): ${vetorInicio}`;
}

console.log(juntaVetor(vetorPilha, vetorAdiciona))