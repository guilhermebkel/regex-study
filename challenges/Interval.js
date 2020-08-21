const text = "1,2,3,4,5,6,a.b c!d?e[f"

const letters = /[a-z]/g
console.log(text.match(letters))

const bTillD = /[b-d]/g
console.log(text.match(bTillD))

const twoTillFour = /[2-4]/g
console.log(text.match(twoTillFour))

const lettersAndNumbers = /[A-Z1-3]/gi
console.log(text.match(lettersAndNumbers))