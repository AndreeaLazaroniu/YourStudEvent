import React, { useState } from 'react';
import axios from 'axios';
import './organizerRegister.css';
import { useNavigate } from 'react-router-dom';

export const OrganizerRegister = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Password: '',
        Email: '',
        VerifyPassword: '',
        PhoneNumber: '',
        Address: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.Password !== formData.VerifyPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('https://localhost:44320/api/Auth/organizerRegister', {
                Name: formData.Name,
                Email: formData.Email,
                PhoneNumber: formData.PhoneNumber,
                Address: formData.Address,
                Password: formData.Password
            });
            console.log(response.data);
            navigate('../../login');
        } catch (err) {
            console.error(err);
            setError('An error occurred while registering.');
        }
    };

    return (
        <div className="organizerRegister">
            <h2 className="organizerRegister-heading">Organizer Registration</h2>
            {error && <p>{error}</p>}
            <form className="organizerRegister-form" onSubmit={handleSubmit}>
                <input type="text" name="Name" value={formData.Name} onChange={handleInputChange} placeholder="Name" required />
                <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} placeholder="Email" required />
                <input type="password" name="Password" value={formData.Password} onChange={handleInputChange} placeholder="Password" required />
                <input type="password" name="VerifyPassword" value={formData.VerifyPassword} onChange={handleInputChange} placeholder="Verify Password" required />
                <input type="tel" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
                <textarea name="Address" value={formData.Address} onChange={handleInputChange} placeholder="Address" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
