import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const EventDetailPage = () => {
    const { Id } = useParams();
    console.log(Id);
    const [eventDetails, setEventDetails] = useState({});
    const [imagePath, setImagePath] = React.useState([]);

    useEffect(() => {
        axios.get(`https://localhost:44317/api/Events/GetEvent/${Id}`)
            .then(response => setEventDetails(response.data))
            .catch(error => console.error('Error fetching event details:', error));
    }, [Id]);

    return (
        <div>
            <h1>{eventDetails.title}</h1>
            <img src={`https://localhost:44317/api/content/getFile/${eventDetails.imageId}`} alt={eventDetails.title} />
            <p>{eventDetails.description}</p>
            <p>{eventDetails.price}</p>
            {/* Additional event details can be added here */}
        </div>
    );
};

export default EventDetailPage;