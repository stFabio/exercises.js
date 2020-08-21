function diaUtil(dia) {
  switch (dia) {
    case 1:
    case 7:
      console.log("Dia não útil");
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("Dia útil");
      break;
  }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(7)