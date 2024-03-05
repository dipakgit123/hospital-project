import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
export default function Nav(){
    return(
        <>
        <div className="container-fluid color_format_back d-none d-md-block">
            <div className="row">
                <div className="col-md-8">
                    <ul>
                        <li className="d-inline-block ml-2 mt-2 text-white  "><i class="fa-solid fa-envelope mr-1"></i>swasthyahospitalcashless@gmail.com</li>
                        <li className="d-inline-block ml-2 mt-2 text-white  "><i class="fa-solid fa-phone mr-1"></i>Call: 0241 243 0530</li>
                        <li className="d-inline-block ml-2 mt-2 text-white  "><i class="fa-solid fa-clock mr-1"></i>Emergency 24 x 7</li>
                    </ul>
                </div>
                <div className="col-md-4">
                <ul>
                        <li className="d-inline-block ml-4 mt-2 text-white  ">Marathi | English</li>
                        <li className="d-inline-block ml-4 mt-2 text-white  "><i class="fa-brands fa-facebook"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white  "><i class="fa-brands fa-twitter"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white  "><i class="fa-brands fa-youtube"></i></li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="container-fluid bg-white mb-2 sticky-top ">
            <div className="row">
                <div className="col-5 col-md-3">
                    <img src="https://www.swasthyahospital.com/img/logo.png" className="mt-2 w-100"/>
                </div>
                <div className=" col-7 col-md-7">
                <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink  className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-expanded="false" > Departments</NavLink>
        <div className="dropdown-menu">
        <NavLink to="/obstrestics" className="dropdown-item">Cardiology</NavLink>
          <NavLink to="/cardiology" className="dropdown-item">Obstrestics &Gynacology</NavLink>
          
        
         
        </div>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" to="/facilities">Facilities</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" to="/docters">Docters</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" to="/cashless">Cashless</NavLink>

      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" to="/contact">Contact Us</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
                </div>
                <div className="col-md-2 d-none d-md-block">
                  <NavLink to="/contact">  <button className="btn btn-lg color_format_back mt-3 text-white" >Appointment</button></NavLink>
                </div>
                </div>
                </div>
        </>
    )
}
 