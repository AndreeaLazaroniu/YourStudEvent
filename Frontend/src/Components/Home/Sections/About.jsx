import { Container, Carousel } from 'react-bootstrap';
import about1 from '../../../Assets/about1.jpg';
import about2 from '../../../Assets/about2.jpg';
import React from 'react';
import './About.css';

export const About = () => {
    return (
        <Container className="about-container" id="about">
            <h2>About Us</h2>
            <p className="about-text">Learn more about what we do and how we help you capture and remember your student events.</p>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={about1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Event</h3>
                        <p>This was an amazing event!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={about2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Event</h3>
                        <p>Such a memorable day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default About;