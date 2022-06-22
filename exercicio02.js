const numero = 12
var fibonacci = [0, 1]
var indice = 0

while (numero > fibonacci[fibonacci.length-1]) {
    fibonacci.push(fibonacci[indice]+fibonacci[indice+1])
    indice+=1
}

console.log(fibonacci)
console.log(fibonacci.includes(numero)? true : false)