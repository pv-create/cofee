import React from "react";
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

var style = {
    backgroundColor: "#292929",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",

    left: "0",
    bottom: "0",
    height: "200px",
    width: "100%",
}



export default function Footer() {
    return (
        <div>
            <div style={style}>
                <ListGroup>
                    <ListGroup.Item variant="dark"><Nav.Link href="https://www.instagram.com/p/CU140KOK0mn/?utm_medium=share_sheet">Instagrampm </Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="dark"><Nav.Link href="https://vk.com/id586450422">VK</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="dark"><Nav.Link href="https://t.me/mateshechka">Tekegram</Nav.Link></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}