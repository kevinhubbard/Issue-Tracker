const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8080;
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Starting app on port ${port}.`);
});