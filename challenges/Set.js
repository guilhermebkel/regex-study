const text = "1,2,3,4,5,6,a.b c!d?e[f"
const pairs = /[02468]/g
console.log(text.match(pairs))

const text2 = "João não vai passear na moto."
const withAndWithoutAccent = /n[aã]/g
console.log(text2.match(withAndWithoutAccent))