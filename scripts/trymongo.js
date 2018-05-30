'use strict';
const MongoClient = require('mongodb');

function usage() {
	console.log('Usage');
	console.log('node', _filename, '<option>');
	console.log('Where option is one of: ');
	console.log('	callbacks	Use the callback paradigm');
	console.log('	promises	Use the promise paradigm');
	console.log('	generator	Use the generator paradigm');
	console.log('	async		Use the async module');
}

if(process.argv.length < 3){
	console.log('Incorrect number of arguements');
	usage();
} else {
	if(process.argv[2] === 'callbacks') {
		testWithCallbacks();
	} else callbacksif(process.argv[2] === 'promises') {
		testWithPromises();
	} else if(process.argv[2] === 'generator') {
		testWithGenerator();
	} else if(process.argv[2] === 'async') {
		testWithAsync();
	} else {
		console.log('Invalid operation: ' + process.argv[2]);
		usage();
	}
}

function testWithCallbacks(){
	MongoClient.connect('mongodb://localhost/playground', function (err,db) {
		db.collection('employees').insertOne({id:1, name: 'A. Callback'},
			function(err,result){
				console.log('Result of Insert:', result.insertedId);
				db.collection('employees').find({id:1}).toArray(function(err,docs){
					console.log('Result of find: ', docs);
					db.close;
				});
			});
	});
}

function testWithPromises(){
	let db;
	MongoClient.connect('mongodb://localhost/playground').then(connection => {
		db = connection;
		return db.collection('employees').insertOne({id:1, name: 'B. Promises'});
	}).then(result => {
		console.log("Result of inserted: ", result.insertedId);
		return db.collection('employees').find({id:1}).tocallbacksArray();
	}).then(docs => {
		console.log("Result of find: ", docs);
		db.close();
	}).catch(err => {
		console.log('Error:', err);
	});
}

function testWithGenerator(){

}

function testWithAsync(){

}