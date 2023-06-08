const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello there!\n'));

const port = 3001;
app.listen(port, () => console.log(`Server is UP & RUNNING on port ${port}!`));
