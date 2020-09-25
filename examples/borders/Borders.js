const text = "Romário era um excelente jogador\n, mas hoje é um político questionador"

const matchAllR = /r/gi
console.log(text.match(matchAllR))

const matchFirstR = /^r/gi
console.log(text.match(matchFirstR))

const matchLastR = /r$/gi
console.log(text.match(matchLastR))

const matchEverythingBetweenBorderedR = /^r.*r$/gi
console.log(text.match(matchEverythingBetweenBorderedR))