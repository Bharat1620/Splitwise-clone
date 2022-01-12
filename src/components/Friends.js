import React, { Component } from "react";
import AddFriend from "./AddFriend";
import {connect} from 'react-redux'

class Friends extends Component {
  
  render() {
    const {friends}=this.props;
    const friendslist=friends.map((friend)=>{
        return (<div>{friend.name}</div>);
      });
    return (
      <div>
      <h4>Add new friend</h4>
      <div className="card1">
      {friendslist}
            </div>
      
      <AddFriend add={this.props.addFriend}/>
      </div>)
  }
}

const mapStateToProps=(state)=>
{
  return {
    friends:state.friends
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addFriend:(obj)=>{dispatch({type:'ADD_FRIEND',obj:obj}) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Friends)