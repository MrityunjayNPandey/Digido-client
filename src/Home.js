import React, { useEffect, useState } from "react";
import Common from "./Common";
import "./index.css";

import web from "../src/Pictures/img2.png";

function Home() {
  const [Home, setHome] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/Home")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHome(data);
      });
  }, []);

  return (
    <>
      <div id="common-1">
        <Common
          name={Home.name}
          imgsrc={Home.img}
          Brand="Digido"
          visit="/service"
          btname="Get started"
          data={Home}
        />
      </div>
    </>
  );
}

export default Home;
