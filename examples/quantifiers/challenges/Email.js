const text = `
	OS e-mails dos convidados são:
		- ful2no@mota.com
		- bromo@gmail.com
		- bromo.mota@hotmail.com
		- maria_da_silva@teste.com
		- eita@empresa.com.br
`

const matchAllEmails = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/gi
console.log(text.match(matchAllEmails))