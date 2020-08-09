const text = '1,2,3,4,5,6,a.b c!d?e'

const singleCommaRegex = /,/
console.log(text.split(singleCommaRegex))
console.log(text.match(singleCommaRegex))

const allCommasRegex = /,/g
console.log(text.match(allCommasRegex))

const uppercaseARegex = /A/g
console.log(text.match(uppercaseARegex))

const noCaseSensitiveARegex = /A/gi
console.log(text.match(noCaseSensitiveARegex))

const all2Regex = /2/g
console.log(text.match(all2Regex))

const littleTextRegex = /b c!d/
console.log(text.match(littleTextRegex))