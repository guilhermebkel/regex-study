// . ? * + - ^ $ | [ ] { } ( ) \ :

const text = '1,2,3,4,5,6,a.b c!d?e'

const pointRegex = /\./g
console.log(text.split(pointRegex))

const symbolsRegex = /,|\.|\?|!| /g
console.log(text.split(symbolsRegex))