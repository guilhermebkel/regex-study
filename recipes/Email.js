const text = `
Os e-mails dos convidados são:
	- fulano@cod3r.com.br
	- xico@gmail.com
	- joao@empresa.info.br
	- mario_silva@registro.br
	- rafa.sampaio@yahoo.com
	- fulano+de+tal@escola.ninja.br
`

const email = /\S+@\w+\.\w{2,6}(\.\w{2})?/g
console.log(text.match(email))