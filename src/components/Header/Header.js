import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" mb-5">
      <nav className="navbar navbar-expand-lg my-nav navbar-dark bg-dark ">
        <div className="container">
          <NavLink className="navbar-brand text-white" to="/home"><h3>CodeDoctor</h3></NavLink>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active  " to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active  " to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">Contact us</NavLink>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;