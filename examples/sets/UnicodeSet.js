const text = "áéíóú àèìòù âêîôû ç ãõ ü"

const allAccentedCharacters = /[À-ü]/g
console.log(text.match(allAccentedCharacters))