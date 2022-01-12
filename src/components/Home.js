import React, {Component} from 'react';
import Friends from "./Friends"
import Expense from './Expense';
import Group from './Group';
import {connect} from 'react-redux';
class Home extends Component {
  
render() {
  console.log(this.props.expenses);
  const expenselist= this.props.expenses.map((exp)=>{
    return (<Expense desc={exp.desc} price={exp.price} frlist={exp.friends} />);
  });
  const grouplist= this.props.groups.map((grp)=>{
    return (<Group name={grp.gname} frlist={grp.friends} id={grp.id} />);
  });

return (
<div className="container">
       <div className="row">
         <div className="col-md-4">
        <Friends/>
        </div>
       <div className="col-md-4">
      <h4>Expenses</h4>
        {expenselist}
       </div>
       <div className="col-md-4">
       <h4>Groups</h4>
       {grouplist}
       </div>
       </div>
      </div>
);
}
}

const mapStateToProps=(state)=>
{
  return {
    friends:state.friends,
    expenses:state.expenses,
    groups:state.groups
  }

}



export default connect(mapStateToProps)(Home);
