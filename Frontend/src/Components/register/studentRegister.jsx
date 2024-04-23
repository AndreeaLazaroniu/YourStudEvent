import React, { useState } from 'react';
import axios from 'axios';
import './studentRegister.css';
import { useNavigate } from 'react-router-dom';

export const StudentRegister = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        VerifyPassword: '',
        PhoneNumber: '',
        DateOfBirth: '',
        University: '',
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
            const response = await axios.post('https://localhost:44320/api/Auth/studentRegister', {
                FirstName: formData.FirstName,
                LastName: formData.LastName,
                Email: formData.Email,
                Password: formData.Password,
                PhoneNumber: formData.PhoneNumber,
                DateOfBirth: formData.DateOfBirth,
                University: formData.University,
                Address: formData.Address,
            });
            console.log(response.data);
            navigate('../../login');
        } catch (err) {
            console.error(err);
            setError('An error occurred while registering.');
        }
    };

    return (
        <div className="studentRegister">
            <h2 className="studentRegister-heading">Student Registration</h2>
            {error && <p>{error}</p>}
            <form className="studentRegister-form" onSubmit={handleSubmit}>
                <input type="text" name="FirstName" value={formData.FirstName} onChange={handleInputChange} placeholder="FirstName" required />
                <input type="text" name="LastName" value={formData.LastName} onChange={handleInputChange} placeholder="LastName" required />
                <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} placeholder="Email" required />
                <input type="password" name="Password" value={formData.Password} onChange={handleInputChange} placeholder="Password" required />
                <input type="password" name="VerifyPassword" value={formData.VerifyPassword} onChange={handleInputChange} placeholder="Verify Password" required />
                <input type="tel" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
                <input type="date" name="DateOfBirth" value={formData.DateOfBirth} onChange={handleInputChange} placeholder="Date of Birth" required />
                <input type="text" name="University" value={formData.University} onChange={handleInputChange} placeholder="University" required />
                <textarea name="Address" value={formData.Address} onChange={handleInputChange} placeholder="Address" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default StudentRegister;