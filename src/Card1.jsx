import React from "react";
import { NavLink } from "react-router-dom";

function Card1({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            We have skilled developers who can offer Application development services in various technologies like flutter, React Native and JAVA 
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;

