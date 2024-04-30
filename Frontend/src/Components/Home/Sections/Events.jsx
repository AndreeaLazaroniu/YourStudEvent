import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import './Events.css';

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
                            <Card.Img variant="top" src={event.image} />
                            <Card.Body>
                                <Card.Title>{event.Title}</Card.Title>
                                <Card.Text>{event.Description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
