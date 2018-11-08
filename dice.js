function randomNumber () {

	let number = Math.round( (Math.random() * 5 ) + 1);

	console.log(`Dado - Ha salido: ${number}`);

}

randomNumber();