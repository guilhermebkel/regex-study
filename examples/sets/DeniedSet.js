const text1 = "1,2,3,a.b c!d?e[f"

const notNumber1 = /\D/g
console.log(text1.match(notNumber1))

const notNumber2 = /[^0-9]/g
console.log(text1.match(notNumber2))

const onlyLetters = /[^\d!\?[\s,\.]/g
console.log(text1.match(onlyLetters))

const text2 = "1: !''#$%&\'()*+,-./ 2: :;<=>?@"

const onlyNumbers = /[^!-/:-@\s]/g
console.log(text2.match(onlyNumbers))