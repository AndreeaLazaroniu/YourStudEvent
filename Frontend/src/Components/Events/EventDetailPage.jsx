import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useAuth} from "../../AuthContext";

export const EventDetailPage = () => {
    const { Id } = useParams();
    console.log(Id);
    const [eventDetails, setEventDetails] = useState({});
    const [imageInfo, setImageInfo] = useState({});
    const auth = useAuth();

    useEffect(() => {
        const fetchEventAndImage = async () => {
            try {
                // Fetch event details
                const eventResponse = await axios.get(`https://localhost:44317/api/Events/GetEvent/${Id}`);
                setEventDetails(eventResponse.data);

                // Check if the event has an imageId and fetch image info
                if (eventResponse.data.imageId) {
                    const imageResponse = await axios.get(`https://localhost:44317/api/content/getObjFile/${eventResponse.data.imageId}`);
                    // Assuming imageResponse.data contains the relative path
                    setImageInfo({
                        ...imageResponse.data,
                        fullPath: `https://localhost:44317${imageResponse.data.path}` // Concatenate the base URL with the path
                    });
                }
            } catch (error) {
                console.error('Error fetching event or image details:', error);
            }
        };

        fetchEventAndImage();
    }, [Id]); // Effect dependency on Id

    const handleAssignToEvent = async () => {
        try {
            const response = await axios.get(`https://localhost:44317/api/Events/AddStudent/${Id}`, {
                headers: {
                    Authorization: `Bearer ${auth.user}`, // Include auth token if needed
                }
            });
            if (response.status === 200) {
                alert('You have been assigned to this event successfully.');
            } else {
                alert('Failed to assign the event.');
            }
        } catch (error) {
            console.error('Error assigning event:', error);
            alert('Error assigning event.');
        }
    };

    return (
        <div>
            <h1>{eventDetails.title}</h1>
            <img src={imageInfo.fullPath} alt="Event" />
            <p>{eventDetails.description}</p>
            <p>{eventDetails.price}</p>
            <button onClick={handleAssignToEvent} className="btn btn-primary">Assign to Me</button>
        </div>
    );
};

export default EventDetailPage;