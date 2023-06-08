const express = require('express');

const app = express();

app.get('/', (req, res) => {
	const request = fetch('http://localhost:3001');
	request.then(response => response.text()
		.then(text => res.send(text)))
		.catch(err => console.error(err));
});

const port = 3000;
app.listen(port, () => console.log(`Server is UP & RUNNING on port ${port}!`));
