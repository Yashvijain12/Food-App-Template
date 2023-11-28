import React from 'react';
import "./Navbar.css";

function Navbar(){
    return(
<div className="header">
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <i className="fa-solid fa-bars" />
          </li>
          <li>My Food</li>
          <li>Mail</li>
        </ul>
      </nav>
    </div>
  </div>
    );
}
export default Navbar;