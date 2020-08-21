function jogos(str) {
  let array = str.split(" ");
  let jogosRecord = 0;
  let piorJogo = 1;
  let recorde = [];
  let maior = array[0];
  let menor = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= maior) {
      maior = array[i];
      jogosRecord++;
    }else if (array[i] < menor){
      menor = array[i]
      piorJogo = i + 1  
    }
  }
  recorde.push(jogosRecord, piorJogo);
  return recorde;
}

console.log(jogos("10 20 20 8 25 3 0 30 1"));