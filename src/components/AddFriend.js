import React, { Component } from "react";
import {Redirect,withRouter} from 'react-router-dom';

class AddFriend extends Component 
{
  state={
    value:""
  }
   handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({
      value:e.target.value
    });
  }

    handleSubmit=(e)=>{
    e.preventDefault();
    let obj={id:Math.random()*10+1,name:this.state.value};
    console.log(obj);
    this.props.add(obj);
    this.setState({
      value:""
    });
    
  }
  render() 
  {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" style={{width:'50%'}} onChange={this.handleChange} value={this.state.value}/><br></br>
      <button type="submit">Add</button>
      </form>
      </div>

      );
  }
}


export default AddFriend;