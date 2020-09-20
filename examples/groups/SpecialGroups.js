const text = 'João é calmo, mas no transito fica nervoso.'

const matchAllWords = /[\wÀ-ú]+/g
console.log(text.match(matchAllWords))

// Positive Lookahead: Matches characters in front of expected match.
const matchWordRightBeforeComma = /[\wÀ-ú]+(?=,)/gi
console.log(text.match(matchWordRightBeforeComma))

// Negative Lookahead: Matches characters not in front of expected match.
const matchWordWithNoMetaCharacterInFront = /[\wÀ-ú]+\b(?!,)/gi
console.log(text.match(matchWordWithNoMetaCharacterInFront))
