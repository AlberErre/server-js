const readline = require('readline');
const readlineSync = require('readline-sync');

function randomNumber () {

	readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

	let result = readlineSync.question(`What dice's size do you want?`);

	console.log(`You have chosen ${result},`);

	let faces = result - 1;
	let RandomNumber = Math.round( (Math.random() * faces ) + 1);

	console.log(`Dado - Ha salido: ${RandomNumber}`);

}

randomNumber();