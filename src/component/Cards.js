import React from "react";
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import imgp from "E:/Projects/React/cofeeshop/cofee/src/pictures/pavel.jpg";
import imga from "E:/Projects/React/cofeeshop/cofee/src/pictures/artem.jpg";
import imgm from "E:/Projects/React/cofeeshop/cofee/src/pictures/misha.jpg";

export default function Cards() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={imgp} />
                <Card.Body>
                    <Card.Title>Павел</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={imga} />
                <Card.Body>
                    <Card.Title>Артем</Card.Title> 
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={imgm} />
                <Card.Body>
                    <Card.Title>Михаил</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>

    )
}