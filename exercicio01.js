const indice = 13
var soma = 0
var k = 0

while (k < indice) {
    k = k + 1
    soma = soma + k
}

console.log(soma);

// O valor da variável soma será 91. Isso porque a cada repetição do laço while, a variável k
// terá +1 adicionado ao seu valor, e a variável soma terá o novo valor de k adicionado ao seu valor
// atual.