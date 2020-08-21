function calculadora(a, operação, b) {
  switch (operação) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Operação inválida");
      break;
  }
}

calculadora(2, "+", 5)
calculadora(2, "-", 5)
calculadora(2, "*", 5)
calculadora(2, "/", 5)
calculadora(2, "**", 5)