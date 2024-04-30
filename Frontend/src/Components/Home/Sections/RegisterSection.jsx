import { Container, Button, Form } from 'react-bootstrap';
import React from 'react';
import './RegisterSection.css';

export const RegisterSection = () => {
    return (
        <Container id="register" className="my-5">
            <h2>Join Us</h2>
            <p>Register now to get the latest updates and join our upcoming events!</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Subscribe
                </Button>
            </Form>
        </Container>
    );
}
