function triangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || b === c || a === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

console.log(triangulo(5, 5, 5));
console.log(triangulo(5, 2, 5));
console.log(triangulo(5, 4, 8));
