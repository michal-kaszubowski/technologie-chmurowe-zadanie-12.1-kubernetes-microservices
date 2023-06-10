const express = require('express');
const { MongoClient } = require('mongodb');
// require('dotenv').config();

const root = process.env.MONGO_USERNAME;
const rootPwd = process.env.MONGO_PASSWORD;
const authMethod = 'DEFAULT';
const uri = `mongodb://${root}:${rootPwd}@localhost:27017/?authMechanism=${authMethod}`;

const client = new MongoClient(uri);
const db = client.db(`${root}`);
const collection = db.collection('sampleCollection');

const app = express();

app.get('/', (req, res) => {
	collection.find({}).toArray()
		.then(response => res.send(response))
		.catch(err => console.error(err));
});

app.get('/check', (req, res) => res.send('Healthy'));

const port = 3001;
app.listen(port, () => console.log(`Server is UP & RUNNING on port ${port}!`));
