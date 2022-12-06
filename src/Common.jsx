import React from "react";
import { NavLink } from "react-router-dom";

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
                  <div id="my3">
                    <h2 className="my-3" id="my33" >
                  We are a one stop solution for all your digital needs be it Graphic Designing, website designing, interactive portals, digital marketing,
                   social media marketing or any such other works. We have dedicated team of professionals for each activity along with great mentors for them.
                    We aim to provide our client all solutions at one place making the work efficient, economical and timely in a well planned way.
                     With a rich experience in handling the works from development sector we do have experience with industrial and trading organisations/ companies as well. 
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
                    alt="HomeImg"
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
