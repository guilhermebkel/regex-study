const text = '1,2,3,4,5,6,a.b c!d?e'

const singleCommaRegex = /,/
const allCommasRegex = /,/g

const uppercaseARegex = /A/g
const noCaseSensitiveARegex = /A/gi

const all2Regex = /2/g

const littleTextRegex = /b c!d/

console.log(text.split(singleCommaRegex))
console.log(text.match(singleCommaRegex))

console.log(text.match(allCommasRegex))

console.log(text.match(noCaseSensitiveARegex))
console.log(text.match(uppercaseARegex))

console.log(text.match(all2Regex))

console.log(text.match(littleTextRegex))