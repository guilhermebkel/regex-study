const text = "Bom\nDia"

const matchLetters = /./gi
console.log(text.match(matchLetters))

const matchWords = /.../gi
console.log(text.match(matchWords))

console.log(text.match(/..../gi))