const text = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

const allBreakLines = /\n/g
console.log(text.match(allBreakLines))

const allSentences = /^(\w).+\1$/gim
console.log(text.match(allSentences))