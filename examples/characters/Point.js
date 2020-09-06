/**
 * (.) is a joker, valid for a single character position
 */

const text = "1,2,3,4,5,6,7,8,9,0"

/**
 * Point acts like a joke, matching everything between 1 and 2
 */
const oneCharacterBetweenNumbers = /1.2/g
console.log(text.match(oneCharacterBetweenNumbers))

const twoCharactersBetweenNumbers = /1..2/g
console.log(text.match(twoCharactersBetweenNumbers))

const twoCharactersBetweenNumberAndComma = /1..,/g
console.log(text.match(twoCharactersBetweenNumberAndComma))

const grades = "8.3,7.1,8.8,10.0"

const eightWithTwoCharacters = /8../g
console.log(grades.match(eightWithTwoCharacters))

const pointBetweenTwoCharacters = /.\../g
console.log(grades.match(pointBetweenTwoCharacters)) 