import React, { useState } from 'react';
import axios from "axios";

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

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
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
        //
        // const formData = new FormData();
        // formData.append('file', file);
        //
        // const uploadResponse = await axios.post('https://localhost:44317/api/content/uploadFile', formData);
        // const uploadResult = uploadResponse.data;

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
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} required/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="Title"
                       required/>
                <input type="text" name="description" value={description} onChange={handleInputChange}
                       placeholder="Description" required/>
                <input type="text" name="location" value={location} onChange={handleInputChange} placeholder="Location"
                       required/>
                <input type="date" name="date" value={date} onChange={handleInputChange} required/>
                <input type="text" name="price" value={price} onChange={handleInputChange} placeholder="Price"
                       required/>
                <input type="text" name="status" value={status} onChange={handleInputChange} placeholder="Status"
                       required/>
                <input type="number" name="catId" value={catId} onChange={handleInputChange} placeholder="Category ID"
                       required/>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}

export default CreateEvent;

