import React, { useState } from 'react';
import axios from "axios";
import { Form, Button, Container } from 'react-bootstrap';
import './CreateEvent.css';
import { useNavigate} from "react-router-dom";

export const CreateEvent = () => {
    // State to hold form data
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [catId, setCatId] = useState('');
    const [imageId, setImageId] = useState('0');
    const [orgUserId, setOrgUserId] = useState('0');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'status':
                setStatus(value);
                break;
            case 'catId':
                setCatId(value);
                break;
            case 'imageId':
                setImageId(value);
                break;
            case 'orgUserId':
                setOrgUserId(value);
                break;
            default:
                break;
        }
    };

    const handleImageChange = async (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const formData = new FormData();
        formData.append('file', selectedFile);

        const uploadResponse = await axios.post('https://localhost:44317/api/content/uploadFile', formData);
        console.log(uploadResponse);
    }

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log({
            title,
            description,
            location,
            date,
            price,
            status,
            catId,
            imageId,
            orgUserId
        });

        try {
            const eventResponse = await axios.post('https://localhost:44317/api/Events/CreateEvent', {
                title,
                description,
                location,
                date,
                price,
                status,
                catId,
                imageId,
                orgUserId
            });
            console.log(eventResponse);

            const eventResult = eventResponse.data;
            console.log(eventResult);

            if(eventResponse.status){
                navigate('../myProfile');
            }

        }catch (e) {
            if (error.response) {
                setError(error.response.data.message);
                console.error('error:', error.response.data.message);
            } else if(error.request) {
                console.error('error:', error.request);
            } else {
                console.error('error', error.message);
            }
        }
    };

    return (
        <main className="CreateEventMain">
            <Container className="mt-4">
                <h1 className="headingCreateEvent"> Add your<br/>own event</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter event title" name="title" value={title} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter event description" name="description" value={description} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter event location" name="location" value={location} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" value={date} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" name="price" value={price} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter event status" name="status" value={status} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCatId">
                        <Form.Label>Category ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter category ID" name="catId" value={catId} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Event Image</Form.Label>
                        <Form.Control type="file" onChange={handleImageChange} required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create Event
                    </Button>
                </Form>
            </Container>
        </main>
    );
}

export default CreateEvent;

