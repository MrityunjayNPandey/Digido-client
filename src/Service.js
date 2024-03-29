import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import Loading from "./Loading";
import Navbar from "./Navbar";

function Service() {
  const [Services, setServices] = useState(null);
  const [footerData, setfooterData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/Services`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServices(data);
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

  let location = useLocation();
  var idx = null;
  console.log(location.state);
  if (location.state) {
    console.log(location.state.index);
    idx = location.state.index;
  }

  return (
    <>
      {Services == null || footerData == null ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <div className="my-5">
            <h1 className="text-center"> Our Services </h1>{" "}
          </div>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {Services &&
                    Services.map((Service, index) => (
                      <>
                        <Card
                          key={index}
                          key1={index}
                          indexshow={idx}
                          title={Service.title}
                          imgsrc={Service.img}
                          description={Service.description}
                          visit={Service.visit}
                          btname={Service.btname}
                          data={Service}
                        />{" "}
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <Footer Footer={footerData} />
        </>
      )}
    </>
  );
}

export default Service;
