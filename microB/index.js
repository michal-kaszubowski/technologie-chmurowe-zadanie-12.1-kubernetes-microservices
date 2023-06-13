const express = require('express');
const { MongoClient } = require('mongodb');

const root = process.env.MONGO_USER;
const rootPwd = process.env.MONGO_PASSWORD;
const authMethod = 'DEFAULT';
const dbHost = process.env.MONGO_HOST;
const dbPort = process.env.MONGO_PORT;

const uri = `mongodb://${root}:${rootPwd}@${dbHost}:${dbPort}/?authMechanism=${authMethod}`; // authenticationFaild

const client = new MongoClient(uri);

const app = express();

app.get('/', (req, res) => {
	client.connect().then(connected => res.send('Connected to MongoDB :)')).catch(err => res.json({
		'error': true,
		'error_data': err,
		'error_message': `${err}`
	}));
});

app.get('/check', (req, res) => res.send('Healthy'));

const port = 3001;
app.listen(port, () => console.log(`Server is UP & RUNNING on port ${port}!`));
