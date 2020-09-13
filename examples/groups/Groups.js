const text1 = "O José Simão é muito engraçado... hehehehehe"

const groupedHe = /(he)+/g
console.log(text1.match(groupedHe))

const text2 = "http://www.site.info www.escola.ninja.br google.com.ag"

const allUrl = /(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g
console.log(text2.match(allUrl))