import { Container, Row, Col, Card } from 'react-bootstrap';
import React, {useEffect} from 'react';
import './Events.css';
import axios from "axios";

export const Events = () => {
    const [events, setEvents] = React.useState([]);
    const [imagePaths, setImagePaths] = React.useState([]);

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
    }, []);

    return (
        <body className="mainEventsHome">
            <div className="eventsHome-container">
                <h2 className="homeEventsTitle">Upcoming Events</h2>
                <Row xs={1} md={3} className="g-4">
                    {events.map((event, Id) => (
                        <Col key={Id}>
                            <Card className="homeEventsCard">
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
            </div>
        </body>
    );
}
