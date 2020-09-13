const text1 = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>"

const allTags = /<(\w+)>.*<\/\1>/g
console.log(text1.match(allTags))

const text2 = "Lentamente é mente muito lenta."

const random = /(lenta)(mente).*\2.*\1\./gi
console.log(text2.match(random))

const random2 = /(?:lenta)(mente).*\1/gi
console.log(text2.match(random2))

const random3 = /(lenta)(mente)?/gi
console.log(text2.match(random3))

// Replacing using rearview
console.log(text2.replace(/(lenta)(mente)/gi, "$2 test"))