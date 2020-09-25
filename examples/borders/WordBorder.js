/**
 * Without accent
 */
const text1 = "dia diatonico diafragma media wikipedia bom_dia melodia radial"

const wordsStartedByDia = /\bdia\w+/gi
console.log(text1.match(wordsStartedByDia))

const wordsEndedByDia = /\w+dia\b/gi
console.log(text1.match(wordsEndedByDia))

const wordsWithSomethingAroundDia = /\w+dia\w+/gi
console.log(text1.match(wordsWithSomethingAroundDia))

const onlyDia = /\bdia\b/gi
console.log(text1.match(onlyDia))

/**
 * With accent
 */
const text2 = "dia diatônico diafragma, média wikipédia bom-dia melodia radial"

const randomDia = /\bdia\b/gi
console.log(text2.match(randomDia))

const AllWordsWithDia = /(\S*)?dia(\S*)?/gi
console.log(text2.match(AllWordsWithDia))

const AllWordsWithDia2 = /([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi
console.log(text2.match(AllWordsWithDia2))
