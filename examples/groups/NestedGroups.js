const text = 'supermercado hipermercado minimercado mercado'

const matchPrefix = /(super|hiper|mini)?mercado/g
console.log(text.match(matchPrefix))

const matchNested = /((hi|su)per|mini)?mercado/g
console.log(text.match(matchNested))