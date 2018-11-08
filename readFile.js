const fs = require('fs');

const path = 'data/items.json';

fs.readFile(path, (error, data) => {
	if (error) {
		console.log(error);
	} else {
		const json = JSON.parse(data);
		console.log('Data: ', json);
	}
});