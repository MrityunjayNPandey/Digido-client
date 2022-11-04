import React from "react";
import { NavLink } from "react-router-dom";

function Card5({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            We have skilled individuals who can offer the digital support in content creation including videography , photography and video editing services on softwares like adobe premier pro etc.  
   
            </p>
            <NavLink to="/contact" className="btn btn-primary">
             Click here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card5;

