function aumentoSalario(salarioAtual, plano) {
    let SalarioFinal = 0;
  switch (plano) {
    case "A":
      SalarioFinal = salarioAtual * 1.1;
      console.log(Math.round(SalarioFinal));
      break;
    case "B":
      SalarioFinal = salarioAtual * 1.15;
      console.log(Math.round(SalarioFinal));
      break;
    case "C":
      SalarioFinal = salarioAtual * 1.20;
      console.log(Math.round(SalarioFinal));
      break;
    default:
        console.log("Plano inválido");
  }
}

aumentoSalario(1500, "A");
aumentoSalario(1500, "B");
aumentoSalario(1500, "C");
aumentoSalario(1500, "D");
