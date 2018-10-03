console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log("Adding note", title, body);
};

var getAll = () => {
	console.log("Getting all notes");
}

var removeNote = (title) => {
	console.log("Removing: ", title);
}

var readNote = (title) => {
	console.log("Read: ", title);
}

module.exports = {
	addNote,
	getAll,
	removeNote,
	readNote
}



// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return 'New note';
// };
