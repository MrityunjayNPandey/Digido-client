import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
import NGO from "./NGO";
import Pvtorg from "./Pvtorg";
import mfgindr from "./mfgindr";
import Backend from "./Backend";
import Android from "./Android";
import DBM from "./DBM";
import Dgtmkt from "./Dgtmkt";
import Frntend from "./Frntend";
import Videocreation from "./Videocreation";
import gvt from "./gvt";
import retail from "./retail";
import media from "./media";
import GraphicDesigning from "./GraphicDesigning";

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
        <Route exact path="/NGO" component={NGO} />
        <Route exact path="/Pvtorg" component={Pvtorg} />
        <Route exact path="/mfgindr" component={mfgindr} />
        <Route exact path="/gvt" component={gvt} />
        <Route exact path="/retail" component={retail} />
        <Route exact path="/media" component={media} />
        <Route exact path="/Backend" component={Backend} />
        <Route exact path="/Android" component={Android} />
        <Route exact path="/DBM" component={DBM} />
        <Route exact path="/Dgtmkt" component={Dgtmkt} />
        <Route exact path="/Frntend" component={Frntend} />
        <Route exact path="/Videocreation" component={Videocreation} />
        <Route exact path="/GraphicDesigning" component={GraphicDesigning} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
