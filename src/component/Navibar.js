import React from "react";
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import About from "./About";

export default function NaviBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CofeeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Сделать заказ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Заявка на работу</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Жалобы и предложения</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Получить карточку постоянного посетителя</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}