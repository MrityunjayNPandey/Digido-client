import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Loading from "./Loading";
import Navbar from "./Navbar";

function onClickButton(event) {
  let form = document.querySelector("form");
  event.preventDefault();
  document.querySelector("#sub").value = "Submiting..";
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbw-2dhQR0hs4Iv73XZUcleZKbOGB_pIaqQ61X38H8jYIlBEnuwRVkuKIfP4Jpb33-0x/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#sub").value = "Submit";
    });
}

function Contact() {
  const [footerData, setfooterData] = useState(null);

  useEffect(() => {
    fetch("https://api.digidosolutions.com/Footer")
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
      {footerData == null ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
          </div>

          <div className="container contact-div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <h1 id="msg"></h1>
                <form>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">
                      Enter Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group pt-3">
                    <label for="exampleFormControlInput1">Contact Number</label>
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="+91-"
                    />
                  </div>
                  <div className="form-group pt-3">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="form-group pt-3">
                    <label for="exampleFormControlTextarea1">
                      Type your Message Here
                    </label>
                    <textarea
                      name="feedback"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="form-group pt-3">
                    <label for="exampleFormControlTextarea1">
                      Services Required
                    </label>
                    <textarea
                      name="servicesrequired"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-12 pt-3">
                    <button
                      onClick={onClickButton}
                      className="btn btn-outline-primary"
                      type="submit"
                      id="sub"
                    >
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <Footer Footer={footerData} />
        </>
      )}
    </>
  );
}

export default Contact;
