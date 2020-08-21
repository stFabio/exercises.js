function verificaString(string1, string2) {
  let contido = true;
  for (let i = 0; i < string1.length; i++) {
    let caractereS1 = string1.charAt(i).toLowerCase();
    for (let j = 0; j < string2.length; j++) {
      let caractereS2 = string2.charAt(j).toLowerCase();
      if (caractereS1 == caractereS2) {
        contido = true;
        break;
      } else {
        contido = false;
      }
    }
    if (!contido){
        return contido
    }
  }
  return contido;
}

console.log(verificaString("abc", "cba"))
console.log(verificaString("abc", "csa"))