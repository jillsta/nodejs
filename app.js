console.log('Starting app.js');

const fs = require('fs');
//const os=require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log("Command: ", command);
// console.log(process.argv);
// console.log('Process ', process.argv);
console.log('Yargs',argv);

if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else if (command === 'read') {
	notes.readNote(argv.title);
} else {
	console.log('Command not recognized');
}



















// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Jill'));

//console.log("Result: ", notes.addTwo(8,8));

// var res = notes.addNote();
// console.log(res);


// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });