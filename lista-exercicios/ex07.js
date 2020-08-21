function bhaskara(ax2, bx, c) {
  let delta = bx ** 2 - 4 * ax2 * c;
  let resultado = [];
  if (delta < 0) {
    return "Delta é negativo";
  } else {
    let b1 = ((-bx + Math.sqrt(delta)) / 2) * ax2;
    let b2 = ((-bx - Math.sqrt(delta)) / 2) * ax2;
    resultado.push(b1, b2);
    return resultado;
  }
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(5, -8, 0));
