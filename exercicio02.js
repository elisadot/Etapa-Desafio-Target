const number = 12
var fibonacci = [0, 1]
var index = 0

while (number > fibonacci[fibonacci.length-1]) {
    fibonacci.push(fibonacci[index]+fibonacci[index+1])
    indice+=1
}

console.log(fibonacci)
console.log(fibonacci.includes(number)? true : false)