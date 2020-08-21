function jurosSimples(cpInicial, txJuros, tpAplicacao) {
  return cpInicial * txJuros * tpAplicacao;
}

function jurosCompostos(cpInicial, txJuros, tpAplicacao) {
  m = cpInicial * Math.pow(1 + txJuros, tpAplicacao);
  return Math.round(m);
}

console.log(jurosSimples(2000, 0.1, 2));
console.log(jurosCompostos(1000000, 0.01, 120));
