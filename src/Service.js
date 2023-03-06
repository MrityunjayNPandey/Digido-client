import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Service() {
  const [Services, setServices] = useState(null);

  useEffect(() => {
    fetch("https://api.digidosolutions.com/Services")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServices(data);
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
      {Services == null ? (
        <></>
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
          <Footer />
        </>
      )}
    </>
  );
}

export default Service;
