import React, {useState} from "react";
import axios from "axios";
import './role.css';
import participant from '../../Assets/participant.png';
import organizer from '../../Assets/organizer.png';
import { useNavigate} from "react-router-dom";

export const Role = () => {
    const navigate = useNavigate();

    const navigateToStudentRegister = () => {
        navigate('../register/StudentRegister');
    };

    const navigateToOrganizerRegister = () => {
        navigate('../register/OrganizerRegister');
    };

    return (
        <div className="role">
            <h1 className="role-heading">Please choose your role</h1>
            <div className="role-buttons">
                <button type="submit" className="student-button" onClick={navigateToStudentRegister}>
                    <img id="student" src={participant} className="img" alt="Student"/>
                    <p>Student</p>
                </button>
                <button type="submit" className="organizer-button" onClick={navigateToOrganizerRegister}>
                    <img id="organizer" src={organizer} className="img" alt="Organizer"/>
                    <p>Organizer</p>
                </button>
            </div>
        </div>
    );
}

export default Role;