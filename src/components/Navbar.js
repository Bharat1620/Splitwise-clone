import React, { Component } from "react";
import AddExpense from "./AddExpense";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
     
      <nav className="nav-wrapper green darken-3 nav">
      <div className="container">
      <Link to="/" className="brand-logo">Splitwise</Link>
      <ul className="right">
      <Link to="/AddExpense">Add expense</Link>
      </ul>
      <ul className="right">
      <Link to="/AddGroup">Add group</Link>
      </ul>
      </div>
      </nav>
      
    );
  }
}


export default NavBar;