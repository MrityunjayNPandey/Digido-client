import React from "react";
// import Common from "./Common";
import { NavLink } from "react-router-dom";
import web from "../src/Pictures/img3.png";
import Footer from "./Footer";



function Common({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> Digido </strong>
                  </h1>
                  <br/>
                  <h3>
                  OUR MISSION
                  </h3>
                  <h2 className="my-3">
                  To empower and support our clients with latest technology, innovations and providing them the best services while growing together.
                 </h2>
                 <h3>
                 OUR VISION
                  </h3>
                 <h2 className="my-3">

                 Building a resilient tomorrow with technology and innovations at their best and providing them best services while growing together.

                
                  </h2>

                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer/>
    </>
  );
}


function About() {
  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;

