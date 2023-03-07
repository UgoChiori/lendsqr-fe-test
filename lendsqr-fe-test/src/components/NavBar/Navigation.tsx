// route pages
import { NavLink } from "react-router-dom";
import React from "react";
import "./navigation.scss";


function Navigation() {
  return (
    <div className="navigation">
    
     
      <NavLink to="/">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/userpage">User Page</NavLink>
      <NavLink to="/userpage:id">

      </NavLink>
    </div>
  );
}
export default Navigation;