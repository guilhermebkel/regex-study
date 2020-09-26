const { read, write } = require("./Files")

const APP_NAME = "CodeSyntaxHighlight"
const HTML_FILE_NAME = "source-code.html"

const SYNTAX_HIGHLIGHTS = [
	{
		name: "String",
		regex: /(\".*\")/g,
		color: "#CE9178"
	},
	{
		name: "Reserved Words",
		regex: /\b(package|public|class|static|if|else)\b/g,
		color: "#D857CF"
	},
	{
		name: "Types",
		regex: /\b(void|int)\b/g,
		color: "#1385E2"
	},
	{
		name: "Multiple Line Comment",
		regex: /(\/\*[\s\S]*\*\/)/g,
		color: "#267703"
	},
	{
		name: "Single Line Comment",
		regex: /(\/\/.*?\n)/g,
		color: "#267703"
	}
]

const log = (text) => {
	const useBreakLine = text.includes("=>")

	console.log(`${useBreakLine ? "\n" : ""}[${APP_NAME}] ${text}`)
}

const highlightSyntax = (text, regex, color) => {
	const replacerTemplate = `<span style="color: ${color}"><b>$1</b></span>`

	const updatedText = text.replace(regex, replacerTemplate)

	return updatedText
}

const run = () => {
	log("=> Highlight Text Started...")

	log(`=> Attempting to get code from '${HTML_FILE_NAME}'...`)
	
	const text = read(HTML_FILE_NAME)

	const codeRegex = /<code>[\s\S]*<\/code>/i
	
	let [code] = text.match(codeRegex)

	log("- Code found with success!")
	
	log("=> Applying colors...")
	
	SYNTAX_HIGHLIGHTS.forEach((syntaxHighlight, index) => {
		const { name, regex, color } = syntaxHighlight
	
		log(`#${index + 1} - type: ${name} - color: ${color} applied!`)
	
		code = highlightSyntax(code, regex, color)
	})

	const highlightedCode = text.replace(codeRegex, code)

	log(`=> Saving changes on '${HTML_FILE_NAME}'...`)

	write(HTML_FILE_NAME, highlightedCode)

	log("- Code highlighted with success!")
}

run()
