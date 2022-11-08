import React from "react";
import { NavLink } from "react-router-dom";

function Card11({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            </p>
            <NavLink to="/mfgindr" className="btn btn-primary">
             Click here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card11;

