function randomNumber () {

	let faces = process.argv[2] - 1;
	let number = Math.round( (Math.random() * faces ) + 1);

	console.log(`Dado - Ha salido: ${number}`);

}

randomNumber();