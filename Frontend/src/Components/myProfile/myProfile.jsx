import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyProfile = () => {
    const [userData, setUserData] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Address: ''
    });
    const [file, setFile] = useState(null); // For profile image upload

    useEffect(() => {
        // Fetch user data from the backend and set it
        // This assumes you have an API to fetch user details
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44320/api/user/profile');
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleUpdateProfile = async () => {
        // API call to update user data
    };

    const handleDeleteAccount = async () => {
        // API call to delete user account
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUploadPhoto = async () => {
        // API call to upload photo
    };

    return (
        <div className="my-profile">
            <h1>My Profile</h1>
            <div className="profile-image-container">
                <img src={file ? URL.createObjectURL(file) : "placeholder-image-url"} alt="Profile" />
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUploadPhoto}>Upload Photo</button>
            </div>
            <div>
                <input type="text" name="Name" value={userData.Name} onChange={handleInputChange} />
                <input type="email" name="Email" value={userData.Email} onChange={handleInputChange} />
                <input type="tel" name="PhoneNumber" value={userData.PhoneNumber} onChange={handleInputChange} />
                <textarea name="Address" value={userData.Address} onChange={handleInputChange} />
            </div>
            <button onClick={handleUpdateProfile}>Update Profile</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
    );
};

export default MyProfile;
