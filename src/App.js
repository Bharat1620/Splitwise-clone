import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import AddExpense from './components/AddExpense';
import AddGroup from './components/AddGroup';
import GroupPage from './components/GroupPage';
import {BrowserRouter,Route,Switch,Link,withRouter, Redirect} from 'react-router-dom';
import AddGroupExpense from './components/AddGroupExpense';

class App extends Component {
  render() {
  return (
    
    <div className="App">
      
      <Navbar/>
      
      <Switch>
      <Route exact path='/'>
        <Home/>
        </Route>
      <Route path='/AddExpense'>
        <AddExpense/>
        </Route>
        <Route path='/AddGroup'>
        <AddGroup/>
        </Route>
        <Route exact path='/groups/:gid'>
        <GroupPage/>
        </Route>
        <Route path='/groups/:gid/addGroupExpense'>
        <AddGroupExpense/>
        </Route>
        
      </Switch>
    
    </div>
   
  );
}
}

export default App;
