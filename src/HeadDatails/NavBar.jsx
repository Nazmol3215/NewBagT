import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Navbar from "react-bootstrap/Navbar";
// import React from "react";
// import { Button } from "react-bootstrap";
// import fdhcvr from "../imagesAll/_opsz24 (1).png";
import fdhcvr1 from "../imagesAll/lop2.jpg";
// import { useNavigate } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";

function OffcanvasExample() {

  return (
    <>
      {[ "sm" ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
               
<img className="logoImge" src= {fdhcvr1} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                     <Link to="/OrderComponent"> About</Link></Nav.Link>
                  <Nav.Link>
                  <Link to="/OrderComponent"> About</Link></Nav.Link>
                  <NavDropdown
                    title="All Products "
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item >New Chair</NavDropdown.Item>
                    <NavDropdown.Item>Office Chair</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                      New Callection
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;




// <Link to="/About"> About</Link> <br />
// <Link to="/AccasorisForcomputer">
//   {" "}
//   AccasorisForcomputer
// </Link>{" "}
// <br />
// <Link to="/AccasorisforMobaile"> AccasorisforMobaile</Link>{" "}
// <br />
// <Link to="/CanteactUs"> CanteactUs</Link> <br />
// <Link to="/Computer"> Computer</Link> <br />
// <Link to="/MobaileDetails"> DetailsButon</Link> <br />