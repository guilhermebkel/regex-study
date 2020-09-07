const html = "<div>Conteudo 01</div><div>Conteudo 02</div>"

/**
 * Quantifiers that are greedy by default
 */
const allContentsTogether = /<div>.+<\/div>/g
console.log(html.match(allContentsTogether))

const allContentsTogether2 = /<div>.*<\/div>/g
console.log(html.match(allContentsTogether2))

const allContentsTogether3 = /<div>.{0,100}<\/div>/g
console.log(html.match(allContentsTogether3))

/**
 * Lazy quantifiers
 */
const allContentsSeparated = /<div>.+?<\/div>/g
console.log(html.match(allContentsSeparated))

const allContentsSeparated2 = /<div>.*?<\/div>/g
console.log(html.match(allContentsSeparated2))

const allContentsSeparated3 = /<div>.{0,100}?<\/div>/g
console.log(html.match(allContentsSeparated3))