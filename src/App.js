import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import OurClients from "./OurClients";
import Service from "./Service";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/about" component={About} />{" "}
        <Route exact path="/service" component={Service} />{" "}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/OurClients" component={OurClients} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
