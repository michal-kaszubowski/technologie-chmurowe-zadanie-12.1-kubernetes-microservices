const express = require('express');
const { MongoClient } = require('mongodb');

const root = process.env.MONGO_USERNAME;
const rootPwd = process.env.MONGO_PASSWORD;
const authMethod = 'DEFAULT';
const dbHost = process.env.MONGO_HOST;
const dbPort = process.env.MONGO_PORT;

const uri = `mongodb://${root}:${rootPwd}@${dbHost}:${dbPort}/?authMechanism=${authMethod}`;

const client = new MongoClient(uri);
// const db = client.db(`${root}`);
// const collection = db.collection('sampleCollection');

const app = express();

app.get('/', (req, res) => {
	client.connect().then(connected => res.send('Connected to MongoDB :)')).catch(err => res.send(err));
});

app.get('/check', (req, res) => res.send('Healthy'));

const port = 3001;
app.listen(port, () => console.log(`Server is UP & RUNNING on port ${port}!`));
