import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './EventsPage.css';
import axios from "axios";

export const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [imagePaths, setImagePaths] = React.useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch('https://localhost:44317/api/Events/GetEvents')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEvents(data);
                return data;
            })
            .then(events => {
                const fetchImagePaths = events.map(event =>
                    axios.get(`https://localhost:44317/api/content/getFile/${event.imageId}`)
                        .then(response => response.data)
                );
                return Promise.all(fetchImagePaths);
            })
            .then(setImagePaths)
            .catch(error => console.error('Error fetching events:', error));

        fetch('https://localhost:44317/api/Categories/GetCategories')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(setCategories)
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || event.catId === selectedCategory) //nu merge. O problema pt alta zi
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
                    <Form.Select nChange={handleCategoryChange}>
                        <option value="">Select category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            <h2>Upcoming Events</h2>
            <Row xs={1} md={3} className="g-4">
                {filteredEvents.map((event, Id) => (
                    <Col key={Id}>
                        <Card>
                            <Card.Img variant="top" src={imagePaths[Id]} />
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