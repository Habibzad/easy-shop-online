import React from "react";
import {
  Nav,
  Form,
  Navbar,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <i class="fas fa-shopping-bag"></i> Easy Shop Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Featured Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
              />
              <Button variant="warning">
                <i class="fas fa-search"></i>
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <i class="fas fa-user"></i> Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <i class="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
