import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './EventsPage.css';
import imgEvent from '../../Assets/IMG_6920.jpg';

export const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://localhost:44317/api/Events/GetEvents')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(setEvents)
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container id="events" className="my-5">
            <Row className="mb-3">
                <Col md={8}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search events..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <h4>Filter by Category</h4>
                    <Form.Select>
                        <option>Select category</option>
                        {/* Add more options as needed */}
                    </Form.Select>
                </Col>
            </Row>
            <h2>Upcoming Events</h2>
            <Row xs={1} md={3} className="g-4">
                {filteredEvents.map((event, Id) => (
                    <Col key={Id}>
                        <Card>
                            <Card.Img variant="top" src={imgEvent} />
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <Card.Text>{event.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}