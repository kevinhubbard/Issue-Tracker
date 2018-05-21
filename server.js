const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;
app.use(express.static('static'));
app.use(bodyParser.json());

const issues = [
	{
		id: 1, status: 'Open', owner: 'Kevin',
		created: new Date('2018-05-18'), effort: 5, completedDate: undefined,
		title: 'Error when clicking add in console.'
	},
	{
		id: 2, status: 'Open', owner: 'Hubbs',
		created: new Date('2018-05-18'), effort: 1, completedDate: new Date('2018-05-18'),
		title: 'Missing bottom border.'
	},
];

app.get('/api/issues', (req,res) => {
	const metadata = {total_count: issues.length};
	res.json({_metadata: metadata, records: issues});
});


//starting the server on local port
app.listen(port, function(){
	console.log("App started on port# " + port);
});