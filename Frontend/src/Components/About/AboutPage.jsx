import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import about1 from '../../Assets/about1.jpg';
import about2 from '../../Assets/about2.jpg';
import about3 from '../../Assets/IMG_6920.jpg';
import './AboutPage.css'; // Make sure to import the CSS file

export const AboutPage = () => {
    // Sample data for the gallery and reviews
    const galleryImages = [
        { about1 },
        { about2 },
        { about3 }
    ];

    const reviews = [
        { author: "John Doe", content: "Great experience, very well organized!" },
        { author: "Jane Smith", content: "Loved the variety of events available." },
        { author: "Carlos B", content: "A fantastic way for students to engage and learn new things." }
    ];

    return (
        <Container>
            <Row className="mt-4 mb-4">
                <Col>
                    <h1 className="stylish-title">YourStudEvent_</h1>
                    <p>Welcome to YourStudEvent, the ultimate platform for student events and engagement. Whether you're a student looking to join exciting events or an organizer aiming to reach a dedicated audience, our platform provides all the tools you need to succeed. Explore a variety of educational, cultural, and fun events designed to enhance your academic life and personal growth.</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Gallery</h2>
                    <Carousel>
                        {galleryImages.map((img, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={img[`about${idx + 1}`]}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            <Row className="mt-4">
                <h2>Reviews</h2>
                {reviews.map((review, index) => (
                    <Col md={4} key={index}>
                        <Card className="mb-3 card-hover">
                            <Card.Body>
                                <Card.Title>{review.author}</Card.Title>
                                <Card.Text>{review.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AboutPage;