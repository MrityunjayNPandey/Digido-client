import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Common({ name, Brand, imgsrc, visit, btname, data}) {

  useEffect(() => {
    window.location.href = "#" + name;
  }, []);

  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> {Brand} </strong>
                  </h1>
                  <div id="my3">
                    <h2 className="my-3" id="my33" >
                  {data.description}
                  </h2>                  
                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>
                  </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="dataImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
