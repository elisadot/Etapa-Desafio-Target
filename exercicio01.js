const index = 13
var sum = 0
var k = 0

while (k < index) {
    k = k + 1
    sum = sum + k
}

console.log(sum);

// O valor da variável soma será 91. Isso porque a cada repetição do laço while, a variável k
// terá +1 adicionado ao seu valor, e a variável soma terá o novo valor de k adicionado ao seu valor
// atual.