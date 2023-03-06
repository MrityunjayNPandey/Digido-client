import "./index.css";
import './style1.css'
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen2] = React.useState(false);
  const [open2, setOpen3] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen2(!open1);
  };
  const handleOpen2 = () => {
    console.log("dsd");
    setOpen3(!open2);
  };

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
  
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/">
                Digido
              </NavLink>
              <button className="navbar-toggler" type="button" onClick={handleOpen2}>
                <span className="navbar-toggler-icon">
                </span>
              </button>
              {open2 ? (
                      <ul style={{ position: "fixed", right:"10px", zIndex:"2", backgroundColor:"white", border:"1px solid lightgrey", borderRadius:"5px", marginTop:"125px"}}>
                        <div onClick={handleOpen2} className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/' className="nav-link">Home</NavLink>
                        </div>
                        <div onClick={handleOpen2} className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/service' className="nav-link">Services</NavLink>
                        </div>
                        <div onClick={handleOpen2} className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/about' className="nav-link">About Us</NavLink>
                        </div>
                        <div onClick={handleOpen2} className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/OurClients' className="nav-link">Our Clients</NavLink>
                        </div>
                        <div onClick={handleOpen2} className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/contact' className="nav-link">Contact Us</NavLink>
                        </div>
                      </ul>
                    ) : null}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only"></span>
                    </NavLink>
                  </li>
                  <li className="nav-item" onMouseEnter={handleOpen}
                      onMouseLeave={handleOpen}>
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"                      
                    >
                      Services
                    </NavLink>
                    {open ? (
                      <ul className="menu" style={{position: "absolute", zIndex:"2", backgroundColor:"white", border:"1px solid lightgrey", borderRadius:"5px"}}>
                        {Services && Services.map((Service, index) => (
                            <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                              <NavLink 
                                to={{
                                  pathname:'./Service',
                                  state:{index}
                                }} 
                              className="nav-link">{Service.title}</NavLink>
                            </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item" onMouseEnter={handleOpen1}
                      onMouseLeave={handleOpen1}>
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/OurClients"
                    >
                      Our Clients
                    </NavLink>
                    {open1 ? (
                      <ul className="menu" style={{position: "absolute", zIndex:"2", backgroundColor:"white", border:"1px solid lightgrey", borderRadius:"5px"}}>
                      {ourClients && ourClients.map((ourClient, index) => (
                            <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                              <NavLink to={{
                                  pathname:'./ourClients',
                                  state:{index}
                                }} 
                               className="nav-link">{ourClient.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                    ) : null}
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>                  
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
