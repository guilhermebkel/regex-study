const text = "Romário era um excelente jogador\n, mas hoje é um político questionador"

/**
 * Without Dotall
 */
const matchEverythingBetweenBorderedR = /^r.*r$/gi
console.log(text.match(matchEverythingBetweenBorderedR))

/**
 * With Dotall
 */
const matchEverythingBetweenBorderedRWithDotall = /^r[\s\S]*r$/gi
console.log(text.match(matchEverythingBetweenBorderedRWithDotall))