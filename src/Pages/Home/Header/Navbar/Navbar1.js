import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import wheel from "../../../../images/truck-wheel (1).png";
import car from "../../../../images/car6_prev_ui.png";
import "./Navbar.css";
import { UserContext } from "../../../../App";
import { useEffect } from "react";
const Navbar1 = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState(false);
  const history = useHistory();
  const handleButton = () => {
    history.push("/login");
  };
 useEffect(()=>{
   fetch('https://gentle-gorge-81848.herokuapp.com/admin',{
     method: 'POST',
     headers: { 'Content-Type': 'application/json'},
     body: JSON.stringify({email: loggedInUser.email})
   })
   .then(res => res.json())
   .then(data => setAdmin(data))
 },[loggedInUser.email])
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <h2 className="logo_text">
            Drive
            <img className="logo" src={wheel} alt="" />n
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end text-white">
          <Nav
            className="my-2 py-4 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link className="me-4" id="nav-link" to="/home">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="me-4" id="nav-link" to="/commonIssue">
                ABOUT
              </Link>
            </Nav.Link>
            <NavDropdown className="me-4" title="FEATURE" id="nav-dropdown">
              <NavDropdown.Item><Link style={{ textDecoration: "none" }} to="/commonIssue">Header</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{ textDecoration: "none" }} to="/commonIssue">Footer</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{ textDecoration: "none" }} to="/commonIssue">Slider Style</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{ textDecoration: "none" }} to="/commonIssue">Page Title</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="me-4" title="DASHBOARD" id="nav-dropdown">
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/book">Book</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/bookingList">
                  Booking List
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/review">
                  Review
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link className="me-4" id="nav-link" to="/commonIssue">
                SERVICE
              </Link>
            </Nav.Link>
              { admin && <NavDropdown className="me-4" title="ADMIN" id="nav-dropdown">
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/order">
                  Order List
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/addService">
                  Add Service
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/makeAdmin">
                  Make Admin
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ textDecoration: "none" }} to="/manageService">
                  Manage Service
                </Link>
              </NavDropdown.Item>
            </NavDropdown>}
            <Nav.Link>
              <Link id="nav-link" to="/contact">
                CONTACT
              </Link>
            </Nav.Link>
            <Nav.Link>
              {loggedInUser.email ? (
                <img
                  style={{ width: "80px", height: "60px", marginTop: "-20px"}}
                  src={car}
                  alt=""
                />
              ) : (
                <Button
                  onClick={handleButton}
                  style={{fontWeight: "bold", marginTop: "-5px"}}
                  variant="warning"
                >
                  Login
                </Button>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
