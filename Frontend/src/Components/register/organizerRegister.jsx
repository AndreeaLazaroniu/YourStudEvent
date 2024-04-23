import React, { useState } from 'react';
import axios from 'axios';
import './organizerRegister.css';

export const OrganizerRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
        phoneNumber: '',
        address: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.verifyPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('https://localhost:44320/api/Auth/organizerRegister', {
                name: formData.name,
                email: formData.email,
                password: formData.password, // In a real app, make sure to encrypt the password before sending
                phoneNumber: formData.phoneNumber,
                address: formData.address
            });
            console.log(response.data);
            // Handle response / navigate to login / show success message
        } catch (err) {
            console.error(err);
            setError('An error occurred while registering.');
        }
    };

    return (
        <div className="organizerRegister">
            <h2 className="organizerRegister-heading">Organizer Registration</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
                <input type="password" name="verifyPassword" value={formData.verifyPassword} onChange={handleInputChange} placeholder="Verify Password" required />
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
                <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
