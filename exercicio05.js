const word = 'BEIJO'
const arrayWord = word.split('')
var newArrayWord = []

for (let index = arrayWord.length; index >= 0; index--) {
    newArrayWord.push(arrayWord[index])
}

console.log(newArrayWord.join(''))