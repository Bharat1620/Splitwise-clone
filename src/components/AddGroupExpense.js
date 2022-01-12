import React, { Component } from "react";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";


class AddGroupExpense extends Component {
    state={
     grpindex:0,
     desc:"",
     price:parseInt(''),
     splitequally:false,
     cinvolved:[],
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
     
      newobj={id:id,name:this.props.friends[i].name,contri:0};
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
      desc:e.target.value
    }
  )
}

handleChange2=(e)=>{
  this.setState(
    {
      ...this.state,
      price:parseInt(e.target.value)
    }
  )
}
handleChange3=(e,id)=>{
  const newarr = this.state.finvolved.slice();
  for(var i=0;i<newarr.length;i++)
  {
    if(id===newarr[i].id)
    {
      newarr[i].contri=parseInt(e.target.value);
    }
  }
  this.setState(
    {
      ...this.state,
     finvolved:newarr
    }
  )
}
handleSubmit=(e)=>{
  
 e.preventDefault();
 
var obj={desc:this.state.desc,price:this.state.price,friends:this.state.finvolved};
this.props.addGroupExpense(obj,this.state.grpindex);
this.props.history.push('/groups/'+this.props.groups[this.state.grpindex].id.toString());

}

handleClick=(e)=>{
  const newarr = this.state.finvolved.slice();
  if(!this.state.splitequally) 
  //now splitequally option will enable right now its false only
  {
  
  for(var i=0;i<newarr.length;i++)
   newarr[i].contri=(this.state.price)/(this.state.finvolved.length);
}
  this.setState({
    ...this.state,
    splitequally:!this.state.splitequally,
    finvolved:newarr
  })
}
componentDidMount(){
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
    this.setState({
        ...this.state,
        grpindex:t,
        cinvolved:new Array(this.props.groups[t].friends.length).fill(false)
    });
}

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
   
    
    const ivalue=(this.state.splitequally)?(this.state.price)/(this.state.finvolved.length):0;
    
    const flist=this.props.groups[t].friends.map((friend,index)=>{
      if (this.state.cinvolved[index]){
     return(<center><div className="input-group row" style={{width:'30%'}}><label><input type='checkbox' onChange={(e)=>{this.handleChange(e,index,friend.id)}}/><span>{friend.name}</span>
     </label>
      <input type="number" placeholder={ivalue} onChange={(e)=>{this.handleChange3(e,friend.id,ivalue)}} style={{marginTop:"-55px",marginLeft:"150px"}}></input>
       </div></center>);}
       else
       {
        return(<center><div className="input-group row" style={{width:'30%'}}><label><input type='checkbox' onChange={(e)=>{this.handleChange(e,index,friend.id)}}/><span>{friend.name}</span>
        </label> </div></center>);
       }


    });
    const func=()=>{
      if(this.state.finvolved.length>=1)
      return(<center><label><input type='checkbox'onChange={this.handleClick}/><span>Split equally</span></label></center>);
    }
    return (
     <div className='container'>
     <center><h4>Add group expense</h4></center>
     <form onSubmit={this.handleSubmit}>
     <center><input placeholder="Enter description" type ="text" onChange={this.handleChange1} style={{width:'30%'}}></input></center>
     <center><input placeholder="Enter expenditure" type ="number" onChange={this.handleChange2} style={{marginBottom:'20px',width:'30%'}}></input></center>
    
     <center><h6 style={{marginBottom:'20px'}}>Included friends</h6></center>
     {flist}
     {func()}
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
    expenses:state.expenses,
    groups:state.groups
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    addGroupExpense:(obj,index)=>{dispatch({type:'ADD_GROUPEXPENSE',obj:obj,index:index}) }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddGroupExpense));