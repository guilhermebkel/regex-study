const text = `
	Lista telefônica:
		- (11) 98765-1212
		-98765-4321
		- (27)98235-1452
`

const matchAllPhones = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g
console.log(text.match(matchAllPhones))