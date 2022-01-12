import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import Expense from './Expense';

class GroupPage extends Component {
  
render() {
    const gid=this.props.match.params.gid;
    let t;
    for(var i=0;i<this.props.groups.length;i++)
    {
        if(this.props.groups[i].id==gid)
        {
            t=i;
            break;
        }
    }
    
    const flist=this.props.groups[t].friends.map((f)=>{
        return (<li>{f.name}</li>)
      })
      const expenselist= this.props.groups[t].expenses.map((grp)=>{
        return (<Expense desc={grp.desc} price={grp.price} frlist={grp.friends} />);
      });
    const temp='/groups/'+gid.toString()+'/addGroupExpense';
return (
<div className="container">
       <div className="row">
         <div className="col-md-4">
        <h4>Friends Involved</h4>
        {flist}
        </div>
       <div className="col-md-4">
       <h4>Expenses </h4><Link to={temp}> Add group expense</Link>
       {expenselist}
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



export default connect(mapStateToProps)(withRouter(GroupPage));
