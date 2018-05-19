const contentNode = document.getElementById('test');

class IssueFilter extends React.Component{
	render() {
		return(
				<div>This is a placeholder component for the issue filter</div>
			);
	}
}

class IssueRow extends React.Component{
	render() {
		const issue = this.props.issue;
		return(
				<tr>
					<td>{issue.id}</td>
					<td>{issue.status}</td>
					<td>{issue.owner}</td>
					<td>{issue.created.toDateString()}</td>
					<td>{issue.effort}</td>
					<td>{issue.completedDate ? issue.completedDate.toDateString() : ''}</td>
					<td>{issue.title}</td>
				</tr>
			);
	}
}

class IssueTable extends React.Component{
	render() {
		const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
		return(
				<table className='bordered-table'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Status</th>
							<th>Owner</th>
							<th>Created</th>
							<th>Effort</th>
							<th>Completion Date</th>
							<th>Title</th>
						</tr>
					</thead>
					<tbody>
						{issueRows}
					</tbody>
				</table>
			);
	}
}

class IssueAdd extends React.Component{
	render() {
		return(
				<div>This is a placeholder component to add issues. </div>
			);
	}
}

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

class IssueList extends React.Component {
	render() {
		return(
				<div>
					<h1>Issue Tracker</h1>
					<IssueFilter />
					<hr />
					<IssueTable issues={issues} />
					<hr />
					<IssueAdd />
				</div>
			);
	}
}

ReactDOM.render(<IssueList />, contentNode);