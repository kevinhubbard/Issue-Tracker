const contentNode = document.getElementById('main');

class BorderWrap extends React.Component {
	render(){
		const testborder = {border: "3px solid blue", padding: 20};
		return(<div style = {testborder}>
				{this.props.children}
			   </div>);
	}
}

class IssueFilter extends React.Component {
	render(){
		return(<div>Issue Filter component placeholder.</div>);
	}
}

const IssueRow = (props) => (
	<tr>
		<td>{props.issue.id}</td>
		<td>{props.issue.status}</td>
		<td>{props.issue.owner}</td>
		<td>{props.issue.createdDate.toDateString()}</td>
		<td>{props.issue.effort}</td>
		<td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
		<td>{props.issue.title}</td>
	</tr>
)

function IssueTable(props){
	const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
	return(
			<table className ='bordered-table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Owner</th>
						<th>Created</th>
						<th>Effort</th>
						<th>Completion</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{issueRows}
				</tbody>
			</table>
		);
}

class IssueAdd extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		var form  = document.forms.issueAdd;
		this.props.createIssue({
			owner: form.owner.value,
			title: form .title.value,
			status: 'New',
			createdDate: new Date(),
		});
		//clear form 
		form.owner.value = ""; form.title.value = "";
	}

	render(){
		return( <div>
					<form name='issueAdd' onSubmit={this.handleSubmit}>
						<input type='text' name='owner' placeholder='Owner' />
						<input type='text' name='title' placeholder='Title' />
						<button>Add</button>
					</form>
				</div>);
	}
}

const issues = [{id: 1, status:"open", owner:'raven', createdDate: new Date('2016-08-15'), effort: 5, completionDate: undefined, title: 'error in console when clicking add you stupid mother fucker you didnt even get there yet!'},
				{id: 2, status:'open', owner:'hubbs', createdDate: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-23'), title:'missing bottom border on panel.'}
				];

class IssueList extends React.Component {
	//setting state
	constructor(){
		super();
		this.state = {issues: []};
		this.createIssue = this.createIssue.bind(this);
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){
		setTimeout(() => { this.setState({issues: issues})}, 500);
	}

	createIssue(newIssue){
		const newIssues = this.state.issues.slice();
		newIssue.id = this.state.issues.length +1;
		newIssues.push(newIssue);
		this.setState({issues: newIssues});
	}

	render(){
		return(
				<div>
					<BorderWrap>
						<h1>Issue Tracker</h1>
					</BorderWrap>

					<IssueFilter /><hr/>

					<IssueTable issues={this.state.issues}/><hr/>

					<BorderWrap>
						<IssueAdd createIssue={this.createIssue} />
					</BorderWrap>
				</div>
			);
	}
}

ReactDOM.render(<IssueList />, contentNode);