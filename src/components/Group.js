import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Group extends Component {
  
  render() {
    const flist=this.props.frlist.map((f)=>{
      return (<li>{f.name}</li>)
    })
    
    const temp='/groups/'+this.props.id.toString();
    return (
            <div className="card">
              <h1>{this.props.name}</h1>
              <p>Friends Involved:</p>
              {flist}
              
              <Link to={temp}>Show more</Link>
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



export default connect(mapStateToProps)(Group);