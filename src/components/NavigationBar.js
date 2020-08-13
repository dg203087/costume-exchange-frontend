import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
        <Navbar.Brand href="/costumes">
          <img alt="img" src="/hero.png" width="50" height="50" className="d-inline-block align-top"/>
          {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/costumes/new">Post Your Costumes</Nav.Link>
          <Nav.Link href="/costumes">Costume List</Nav.Link>
          {/* <Nav.Link href="/categories">Costumes By Category</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <img alt="" src="/header3.png" width="100%" height="100%" />
    <br></br><br></br>
  </div>
  )
}

export default NavigationBar

