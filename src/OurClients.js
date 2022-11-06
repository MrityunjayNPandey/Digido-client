import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";

import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";
import Footer from "./Footer";

function OurClients() {
  return (
    <>
      {/* <div className="my-5">
        <h1 className="text-center">Our Clients: </h1>
      </div>

      <div className="text-center">
        <h3 className="my-5">CSOs, NGOs and consultancy firms: </h3>
        <h4>Tanyak </h4>
        <h4>Healthcare companion </h4>
        <h4>Sphere India </h4>
        <h4>Devlens </h4>
        <h4>Knowledge solutions</h4>
        <h3 className="my-5">Private Organizations: </h3>
        <h4>Womania </h4>
        <h4>Simsan Pvt ltd </h4>
        <h4>Tanyak Pvt ltd </h4>
        <h3>Government, Manufacturing industries, retail, media etc</h3>
      </div> */}
      <div className="my-5">
        <h1 className="text-center"> Our Clients </h1>{" "}
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card6 title="CSOs, NGOs and consultancy firms" imgsrc={img1} />{" "}
              <Card7 title="Private Organizations" imgsrc={img2} />{" "}
              <Card8
                title="Government, Manufacturing industries, retail, media etc"
                imgsrc={img2}
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurClients;
