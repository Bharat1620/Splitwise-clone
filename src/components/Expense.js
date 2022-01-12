import React, { Component } from "react";
import {connect} from 'react-redux';


class Expense extends Component {
  
  render() {
    const flist=this.props.frlist.map((f)=>{
      return (<li>{f.name} owes {f.contri}</li>)
    })
    return (
            <div className="card">
              <h1>{this.props.desc}</h1>
              <p>Expenditure involved: {this.props.price}</p>
              {flist}
            </div>
          );
  }
}

const mapStateToProps=(state)=>
{
  return {
    friends:state.friends,
    expenses:state.expenses
  }

}



export default connect(mapStateToProps)(Expense);