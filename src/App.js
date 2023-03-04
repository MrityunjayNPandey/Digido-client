import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
import img1 from "./Pictures/img1.png";
import img2 from "./Pictures/img2.png";
import img3 from "./Pictures/img3.png";
import img4 from "./Pictures/img4.png";
import img5 from "./Pictures/img5.png";
import img6 from "./Pictures/img6.png";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/about" component={About} />{" "}
        <Route exact path="/service" component={Service} />{" "}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/OurClients" component={OurClients} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
