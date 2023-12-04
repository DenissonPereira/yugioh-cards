import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import './Nav.sass'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container fluid>
        <Navbar.Brand href="#" id='logo'>Yu-Gi-Oh! Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/yugioh-cards">HOME</Nav.Link>
            <Nav.Link as={Link} to="/yugioh-cards/cards">CARDS</Nav.Link>
            <Nav.Link as={Link} to="/yugioh-cards/news">NEWS</Nav.Link>
            <Nav.Link as={Link} to="/yugioh-cards/about">
              ABOUT
            </Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;