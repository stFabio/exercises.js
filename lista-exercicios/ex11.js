function bissexto(ano) {
  if (ano % 4 === 0 || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(bissexto(2020))
console.log(bissexto(2016))
console.log(bissexto(2012))
console.log(bissexto(2010))
console.log(bissexto(2007))
console.log(bissexto(2024))
console.log(bissexto(2022))
