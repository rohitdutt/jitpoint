import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="container-fluid">
        <NavLink  className="navbar-brand" to="/">Notes</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-toggle"
          aria-controls="nav-content"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button> 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-lg-auto">
      <li className="nav-item active">
        <NavLink exact activeClassName="active-class" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active-class" className="nav-link" to="/Service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active-class" className="nav-link" to="/About">About us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active-class" className="nav-link" to="/Contact">Contact us</NavLink>
      </li>
      
    </ul>
    </div>
  </div>
</nav>
</header>

        </>
    )
};
export default Navbar;