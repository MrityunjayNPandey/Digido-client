import React, { useEffect, useState } from "react";
import Common from "./Common";
import Footer from "./Footer";
import Loading from "./Loading";
import Navbar from "./Navbar";
import "./index.css";

function Home() {
  const [Home, setHome] = useState("");
  const [footerData, setfooterData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/Home`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHome(data[0]);
        console.log(Home);
      });

    fetch(`${process.env.REACT_APP_SERVER_URL}/Footer`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setfooterData(data);
        console.log(footerData);
      });
  }, []);

  return (
    <>
      {Home == "" || footerData == null ? (
        <header className="App-header">
          <Loading />
        </header>
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
          <Footer Footer={footerData} />
        </>
      )}
    </>
  );
}

export default Home;
