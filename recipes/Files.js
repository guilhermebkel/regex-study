const fs = require("fs")
const path = require("path")

const RAW_FILES_FOLDER_NAME = "raw-files"
const CHANGED_FILES_FOLDER_NAME = "changed-files"

const read = fileName => {
	const originPath = path.join(__dirname, RAW_FILES_FOLDER_NAME, fileName)

	const file = fs.readFileSync(originPath, { encoding: "utf-8" })

	return file
}

const write = (fileName, data) => {
	const changedFilesFolderPath = path.join(__dirname, CHANGED_FILES_FOLDER_NAME)

	const destinyPath = path.join(__dirname, CHANGED_FILES_FOLDER_NAME, fileName)

	const changedFilesFolderExists = fs.existsSync(changedFilesFolderPath)

	if (!changedFilesFolderExists) {
		fs.mkdirSync(changedFilesFolderPath)
	}

	fs.writeFileSync(destinyPath, data, { encoding: "utf-8" })
}

module.exports = {
	read,
	write
}
