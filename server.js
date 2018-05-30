const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8080;
app.use(express.static('static'));
app.use(bodyParser.json());

let db;

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

const validIssueStatus = {
	New: true,
	Open: true,
	Assigned: true,
	Fixed: true,
	Verified: true,
	Closed: true,
};

const issueFieldType = {
	id: 'required',
	status: 'required',
	owner: 'required',
	effort: 'optional',
	created: 'required',
	completionDate: 'optional',
	title: 'required',
};

function validateIssue(issue){
	for(const field in issueFieldType){
		const type = issueFieldType[field];
		if(!type){
			delete issue[field];
		} else if(type === 'required' && !issue[field]) {
			return `${field} is required.`;
		}
	}

	if(!validIssueStatus[issue.status])
		return `${issue.status} is not a valid status.`;

	return null;
}

app.get('/api/issues', (req,res) => {
	db.collection('issues').find().toArray().then(issues => {
		const metadata = { total_count: issues.length};
		res.json({ _metadata: metadata, records: issues })
	}).catch(error => {
		console.log(error);
		res.satus(500).json({ message: `Internal server error: ${error}` });
	});
});


app.post('/api/issues', (req,res) => {
	const newIssue = req.body;
	newIssue.id = issues.length + 1;
	newIssue.created = new Date();

	if(!newIssue.status)
		newIssue.status = 'New';

	const err = validateIssue(newIssue)
	if(err) {
		res.status(422).json({message: `invalid request: ${err}`});
		return;
	}

	issues.push(newIssue);

	res.json(newIssue);
});


//starting the server on local port
MongoClient.connect('mongodb://localhost/issueTracker').then(connection => {
	db = connection;
	app.listen(port, () => {
		console.log("Application started on port: " , port);
	});
}).catch(error => {
	console.log('Error:', error);
});