import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Pictures/img3.png";
import Footer from "./Footer";
import "./index.css";

function About() {
  const [About, setAbout] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/About")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAbout(data);
      });
  }, []);

  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={About.img}
        visit="/contact"
        btname="Contact Us"
        About={About}
      />
    </>
  );
}

function Common({ name, imgsrc, visit, btname, About }) {
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
                  <br />
                  <h3>{About.title1}</h3>
                  <h2 className="my-3">{About.description1}</h2>
                  <h3>{About.title2}</h3>
                  <h2 className="my-3">{About.description2}</h2>
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
    </>
  );
}

export default About;
