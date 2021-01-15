import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
           
                <Link to="/" >Registeration</Link>
                <Link to="/login" >Login</Link>
                <Link to="/joblisting" >Job Listing</Link>
              

                
                
            </div>
        );
    }
}
export default Nav;


