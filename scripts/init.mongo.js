db = new Mongo().getDB('issueTracker');
db.issues.remove({});

db.issues.insert([
	{
		status: 'Open', 
		owner: 'Kevin', 
		created: new Date('2018-05-29'),
		effort: 5,
		completionDate: undefined,
		title: 'Error in console when clicking add.',
	},
	{
		status: 'Assigned', 
		owner: 'Kevin', 
		created: new Date('2018-05-29'),
		effort: 5,
		completionDate: new Date('2018-05-29'),
		title: 'Worked hard keep it up let one last one go.',
	},
]);

db.issues.createIndex({status:1});
db.issues.createIndex({owner:1});
db.issues.createIndex({created:1});