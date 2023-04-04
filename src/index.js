const { isUtf8 } = require('buffer');
const { readFile } = require('fs');
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	const data = await readFile(fileName, 'utf8');
	return data;
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(filename, fileContent)
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }