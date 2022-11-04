import React from "react";
import { NavLink } from "react-router-dom";

function Card4({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            We have skilled individuals  who can offer digital marketing services like Search Engine Optimisation(SEO), Adsins and marketing on various social media platform.  
   
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

export default Card4;

