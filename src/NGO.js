import React from "react";
import Footer from "./Footer";

function NGO() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Clients: </h1>
      </div>

      <div className="text-center">
        <h3 className="my-5">CSOs, NGOs and consultancy firms: </h3>
        <a className="nav-link" href="https://tanyak.org/">
          Tanyak{" "}
        </a>
        <h4>Healthcare companion </h4>
        <h4>Devlens </h4>
        <h4>Knowledge solutions</h4>
        <br></br>
        <Footer />
      </div>
    </div>
  );
}

export default NGO;
