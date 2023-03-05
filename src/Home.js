import React, { useEffect, useState } from "react";
import Common from "./Common";
import "./index.css";

function Home() {
  const [Home, setHome] = useState("");
  const [Image, setImage] = useState("");

  useEffect(() => {
    fetch("https://api.digidosolutions.com/Home")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHome(data[0]);
        setImage(Home.img);
        console.log(Home);
      });
  }, []);

  return (
    <>
      {Home == null ? (
        <></>
      ) : (
        <div id="common-1">
          <Common
            name={Home.name}
            imgsrc={Image}
            Brand="Digido"
            visit="/service"
            btname="Get started"
            data={Home}
          />
        </div>
      )}
    </>
  );
}

export default Home;
