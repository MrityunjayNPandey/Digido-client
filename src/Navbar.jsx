import React from "react";
import { NavLink } from "react-router-dom";
import './style1.css'


function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen2(!open1);
  };

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/">
                Digido
              </NavLink>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
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
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}} >
                          <NavLink to='/Backend' className="nav-link">Backend Development</NavLink>
                        </li>
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/Android' className="nav-link">Android Development</NavLink>
                        </li>
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/DBM' className="nav-link">Database Management</NavLink>
                        </li>
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/Frntend' className="nav-link">Frontend Development</NavLink>
                        </li>
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/Dgtmkt' className="nav-link">Digital Marketing</NavLink>
                        </li>
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/Videocreation' className="nav-link">Video Creation</NavLink>
                        </li>
                        <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                          <NavLink to='/GraphicDesigning' className="nav-link">Graphic Designing</NavLink>
                        </li>
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
                      <li className="nav-item" style={{display:"block", marginRight:"20px"}} >
                        <NavLink to='/NGO' className="nav-link">CSOs, NGOs and consultancy firms</NavLink>
                      </li>
                      <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                        <NavLink to='/Pvtorg' className="nav-link">Private Organizations</NavLink>
                      </li>
                      <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                        <NavLink to='/gvt' className="nav-link">Government</NavLink>
                      </li>
                      <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                        <NavLink to='/mfgindr' className="nav-link">Industries</NavLink>
                      </li>
                      <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                        <NavLink to='/retail' className="nav-link">Retail</NavLink>
                      </li>
                      <li className="nav-item" style={{display:"block", marginRight:"20px"}}>
                        <NavLink to='/media' className="nav-link">Media</NavLink>
                      </li>
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
