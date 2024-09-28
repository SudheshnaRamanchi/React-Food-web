import React from 'react';
import { NavDropdown, Navbar, Nav, Form, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Navebar.css'; // Make sure the path to your CSS file is correct

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar mb-3"> {/* Set to expand on large screens */}
     
          <Navbar.Brand as={Link} to='/About'>
            <img src='chef.jpg' alt="Chef Logo" width={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to='/About'>About Us</Nav.Link>
                <Nav.Link as={Link} to='/recipecard'>Menu</Nav.Link>
                <Nav.Link as={Link} to="/Form">Order</Nav.Link>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
       
      </Navbar>
    </>
  );
}

export default MyNavbar;
