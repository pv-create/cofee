import React from "react";
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import png1 from "D:/Projects/React/cofeeshop/cofee/src/pictures/cofee1.png";
import png2 from "D:/Projects/React/cofeeshop/cofee/src/pictures/cofee2.jpg";
import png3 from "D:/Projects/React/cofeeshop/cofee/src/pictures/cofee3.jpg";
export default function Caruselka() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={png1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={png2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={png3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}