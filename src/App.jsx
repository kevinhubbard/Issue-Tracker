const contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render(){
    return(<div>This is a placeholder for the Issue Filter.</div>)
  }
}

class IssueRow extends React.Component {
  render(){
    const borderedStyle = {border: "1px solid silver", padding: 4};
    return(
      <tr>
        <td style={borderedStyle}>{this.props.issue_id}</td>
        <td style={borderedStyle}>{this.props.issue_title}</td>
      </tr>)

  }
}

class IssueTable extends React.Component {
  render(){
    const borderedStyle = {border: "1px solid blue", padding: 6};
    return(
      <table style={{borderCollapse:"collapse"}}>
              <thead>
                <tr>
                  <th style={borderedStyle}>Id</th>
                  <th style={borderedStyle}>Title</th>
                </tr>
              </thead>
              <tbody>
                <IssueRow issue_id={0} issue_title="error in console when clicking add" />
                <IssueRow issue_id={1} issue_title="missing bottom border on panel" />


              </tbody>
      </table>)
  }
}



class IssueAdd extends React.Component {
  render(){
    return(<div>This is a placeholder for the issue tracker form.</div>)
  }
}

class IssueList extends React.Component{
  render(){
    return(<div>
            <h1>Issue Tracker</h1>
            <IssueFilter />
            <hr/>
            <IssueTable />
            <hr/>
            <IssueAdd />
           </div>);
  }
}
ReactDOM.render(<IssueList />, contentNode);