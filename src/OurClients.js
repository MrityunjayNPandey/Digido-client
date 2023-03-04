import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
function OurClients() {
  const [ourClients, setourClients] = useState(null);

  useEffect(() => {
    fetch("https://api.digidosolutions.com/ourClients")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setourClients(data);
      });
  }, []);

  let location = useLocation();
  var idx = null;
  if (location.state) {
    console.log(location.state.index);
    idx = location.state.index;
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Clients </h1>{" "}
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ourClients &&
                ourClients.map((ourClient, index) => (
                  <>
                    <Card
                      key={index}
                      key1={index}
                      indexshow={idx}
                      title={ourClient.title}
                      imgsrc={ourClient.img}
                      description={ourClient.description}
                      visit={ourClient.visit}
                      btname={ourClient.btname}
                      data={ourClient}
                    />{" "}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurClients;
