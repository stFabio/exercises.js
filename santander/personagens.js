function filme(personagens, filmes, lancamentos, id) {
    if (id > filmes.length || id < 1) {
        return "Essa não é uma opção válida."
    }
    else {
        r = personagens[id - 1] + " é um personagem do filme " + filmes[id - 1] + " que estreou no cinema em " + lancamentos[id - 1] + "."
        return r
    }
}

console.log(filme(["Hermione", "Trinity", "Leia"], ["Harry Potter", "Matrix", "Star wars"], [2001, 1999, 1977], 4))
