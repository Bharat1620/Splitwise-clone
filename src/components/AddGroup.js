import React, { Component } from "react";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";


class AddGroup extends Component {
    state={
     gname:"",
     cinvolved:new Array(this.props.friends.length).fill(false),
     finvolved:[]
    }

handleChange=(e,position,id)=>{
 
  var flag;
  const updatedCheckedState = this.state.cinvolved.map((item, index) =>{
   if(index===position) 
   {
     flag=!item;
     
   }
   return (index === position ? !item : item)
  });
  
  var newobj;
  
  if(flag)
  {
  for(var i=0;i<this.props.friends.length;i++)
  {
    if(id===this.props.friends[i].id)
    {
     
      newobj={id:id,name:this.props.friends[i].name};
      break;
    }
  }
 
  this.setState({
      ...this.state,
      cinvolved:updatedCheckedState,
      finvolved:[...this.state.finvolved,newobj]
    });
 
  }
  else
  {
    const newfinvolved=this.state.finvolved.filter((item,index)=>{
         return index!=position;
    });
    this.setState(
      {
        ...this.state,
        cinvolved:updatedCheckedState,
        finvolved:newfinvolved
      }
    );
  }
  
}

handleChange1=(e)=>{
  this.setState(
    {
      ...this.state,
      gname:e.target.value
    }
  )
}


handleSubmit=(e)=>{
 e.preventDefault();
var obj={id:Math.floor(Math.random() * 100)+1,gname:this.state.gname,friends:this.state.finvolved,expenses:[]};
this.props.addGroup(obj);
this.props.history.push('/');

}


  render() {
    const flist=this.props.friends.map((friend,index)=>{
        return(<center><div className="input-group row" style={{width:'30%'}}><label><input type='checkbox' onChange={(e)=>{this.handleChange(e,index,friend.id)}}/><span>{friend.name}</span>
        </label> </div></center>);
    });

    return (
     <div className='container'>
     <center><h4>Add new group</h4></center>
     <form onSubmit={this.handleSubmit}>
     <center><input placeholder="Enter group description" type ="text" onChange={this.handleChange1} style={{width:'30%',marginBottom:'20px'}}></input></center>    
     <center><h6 style={{marginBottom:'20px'}}>Include friends in the group</h6></center>
     {flist}
     <center><button type='submit'>Submit</button></center>
     </form>
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

const mapDispatchToProps=(dispatch)=>{
  return {
    addGroup:(obj)=>{dispatch({type:'ADD_GROUP',obj:obj}) }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddGroup));