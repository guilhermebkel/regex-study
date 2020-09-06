const text1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!"
const text2 = "There is a big fog in NYC"

// + -> One or More matches

const matchFogoCaseNonSensitive = /fogo+/gi
console.log(text1.match(matchFogoCaseNonSensitive))
console.log(text2.match(matchFogoCaseNonSensitive))

const text3 = "Os números 0123456789."

const allNumbersSeparated = /[0-9]/g
const allNumbersTogether = /[0-9]+/g
console.log(text3.match(allNumbersSeparated))
console.log(text3.match(allNumbersTogether))
