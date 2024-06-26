import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../../AuthContext";
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

export const EventDetailsOrg = () => {
    const { Id } = useParams();
    const [eventDetails, setEventDetails] = useState({});
    const [imageInfo, setImageInfo] = useState({});
    const [participants, setParticipants] = useState([]);
    const [showParticipantsModal, setShowParticipantsModal] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEventAndImage = async () => {
            try {
                const eventResponse = await axios.get(`https://localhost:44317/api/Events/GetEvent/${Id}`);
                setEventDetails(eventResponse.data);

                if (eventResponse.data.imageId) {
                    const imageResponse = await axios.get(`https://localhost:44317/api/content/getObjFile/${eventResponse.data.imageId}`);
                    setImageInfo({
                        ...imageResponse.data,
                        fullPath: `https://localhost:44317${imageResponse.data.path}`
                    });
                }
            } catch (error) {
                console.error('Error fetching event or image details:', error);
            }
        };

        fetchEventAndImage();
    }, [Id]);

    const fetchParticipants = async () => {
        try {
            const response = await axios.get(`https://localhost:44317/api/Events/GetStudents/${Id}`);
            setParticipants(response.data);
            setShowParticipantsModal(true);
        } catch (error) {
            console.error('Error fetching participants:', error);
            alert('Failed to fetch participants.');
        }
    };

    const handleDeleteEvent = async () => {
        try {
            const response = await axios.delete(`https://localhost:44317/api/Events/${Id}`, {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`
                }
            });
            if (response.status === 200 || response.status === 204) {
                alert('Event deleted successfully.');
                navigate('/MyEvents');
            } else {
                alert('Failed to delete the event.');
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Error deleting event.');
        }
    };

    return (
        <main className="EventDetailMain">
            <Container className="EventDetailContainer">
                <Row className="mb-3">
                    <Col xs={12}>
                        <img src={imageInfo.fullPath} alt="Event" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h1>{eventDetails.title}</h1>
                        <p>Location: {eventDetails.location}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Description</Card.Title>
                                <Card.Text>
                                    {eventDetails.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>You can delete this event:</Card.Title>
                                <Button onClick={handleDeleteEvent} className="btn btn-danger w-100 mb-3">Delete Event</Button>
                                <Button onClick={fetchParticipants} className="w-100 mb-3">See Participants</Button>
                                <Card.Text>Price: {eventDetails.price}</Card.Text>
                                <Card.Text>Date: {eventDetails.date}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={showParticipantsModal} onHide={() => setShowParticipantsModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Participants</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {participants.length ? participants.map(participant => (
                            <div key={participant.id}>
                                <p>First Name: {participant.firstName}</p>
                                <p>Last Name: {participant.lastName}</p>
                                <p>Email: {participant.email}</p>
                            </div>
                        )) : <p>No participants found.</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowParticipantsModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </main>
    );
};

export default EventDetailsOrg;
