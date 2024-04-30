import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import './Events.css';
import imgEvent from '../../../Assets/IMG_6920.jpg';

export const Events = () => {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
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

    return (
        <Container id="events" className="my-5">
            <h2>Upcoming Events</h2>
            <Row xs={1} md={3} className="g-4">
                {events.map((event, Id) => (
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
