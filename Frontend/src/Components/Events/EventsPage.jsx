import {Container, Row, Col, Card, Form, InputGroup, Button, Modal} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './EventsPage.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [imagePaths, setImagePaths] = React.useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isAssigned, setIsAssigned] = useState(false);
    const navigate = useNavigate();

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

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAssignToEvent = () => {
        alert("You are assigned");
        setIsAssigned(true);
    }

    const handleCardClick = (event) => {  // Adjust according to actual property name
        if (event.eventId) {
            navigate(`/event/${event.eventId}`);
        } else {
            console.error('Event ID is undefined');
        }
    };

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || event.catId === selectedCategory) //nu merge. O problema pt alta zi
    );

    return (
        <main className="MainEventPage">
            <Container className="eventsPageContainer">
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
                <Row xs={1} md={3} className="g-4">
                    {filteredEvents.map((event, Id) => (
                        <Col key={event.eventId || event.id}>
                            <Card className="eventPageCard" onClick={() => handleCardClick(event)}>
                                <Card.Img variant="top" src={imagePaths[Id]}/>
                                <Card.Body>
                                    <Card.Title>{event.title}</Card.Title>
                                    <Card.Text>{event.description}</Card.Text>
                                    <Card.Text>{event.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedEvent?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" src={imagePaths[selectedEvent?.imageId]} />
                        <p>{selectedEvent?.description}</p>
                        <p>{selectedEvent?.price}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAssignToEvent}>
                            {isAssigned ? "Assigned" : "Assign to event"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </main>
    );
}