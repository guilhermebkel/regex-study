const text = "O João recebeu 120 milhões apostando 6 9 21 23 45 46."

const oneOrTwoDigits = /\d{1,2}/g
console.log(text.match(oneOrTwoDigits))

const twoDigits = /[0-9]{2}/g
console.log(text.match(twoDigits))

const maxDigitsPossible = /\d{1,}/g
console.log(text.match(maxDigitsPossible))

const charactersWithSevenDigits = /\w{7}/g
console.log(text.match(charactersWithSevenDigits))

const charactersWithSevenOrMoreDigits = /[\wõ]{7,}/g
console.log(text.match(charactersWithSevenOrMoreDigits))