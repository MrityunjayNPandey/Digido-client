import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";

import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";
import Footer from "./Footer";

function Frntend() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>{" "}
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card3 title="Frontend Development" imgsrc={img4} />{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Frntend;
