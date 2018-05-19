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
		const borderedStyle = {border: "1px solid green", padding: 4}
		return(
				<tr>
					<td style={borderedStyle}>{this.props.issue_id}</td>
					<td style={borderedStyle}>{this.props.children}</td>
				</tr>
			);
	}
}

class IssueTable extends React.Component{
	render() {
		const borderedStyle = {border: "1px solid silver", padding: 6}
		return(
				<table style={{borderCollapse: "collapse"}}>
					<thead>
						<tr>
							<th style={borderedStyle}>ID</th>
							<th style={borderedStyle}>Title</th>
						</tr>
					</thead>
					<tbody>
						<IssueRow issue_id={1}>Error using this.props.children</IssueRow>
						<IssueRow issue_id={2}>Missing bottom <b>border</b> on panel.</IssueRow>
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

class IssueList extends React.Component {
	render() {
		return(
				<div>
					<h1>Issue Tracker</h1>
					<IssueFilter />
					<hr />
					<IssueTable />
					<hr />
					<IssueAdd />
				</div>
			);
	}
}

ReactDOM.render(<IssueList />, contentNode);