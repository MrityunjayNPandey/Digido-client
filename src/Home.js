import React, { useEffect, useState } from "react";
import Common from "./Common";
import Footer from "./Footer";
import "./index.css";
import Navbar from "./Navbar";

function Home() {
  const [Home, setHome] = useState("");

  useEffect(() => {
    fetch("https://api.digidosolutions.com/Home")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHome(data[0]);
        console.log(Home);
      });
  }, []);

  return (
    <>
      {Home == "" ? (
        <></>
      ) : (
        <>
          <Navbar />
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
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
