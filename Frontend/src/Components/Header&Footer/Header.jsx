import React, {useState} from 'react';
import './Header.css';
import logo from "../../Assets/logo.png";
import { useNavigate} from "react-router-dom";
import {AuthContext} from "../../AuthContext";


export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext); // Add this line
    const navigate = useNavigate();

    // Add a function to handle logout
    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        // Set the isLoggedIn state to false
        setIsLoggedIn(false);
    };

    return (
        <div className="Header">
            <ul className="nav">
                <li className="left"><a href="/home"><img id="student" src={logo} className="imgHeader" alt="logo" /></a></li>
                <div className="center">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/events">Events</a></li>
                </div>
                <div className="right">
                    {isLoggedIn ? (
                        <>
                            <button className="headerButton" onClick={() => navigate('../myProfile')}>MyProfile</button>
                            <button className="headerButton" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button className="headerButton" onClick={() => navigate('../login')}>Login</button>
                            <button className="headerButton" onClick={() => navigate('../role')}>Register</button>
                        </>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default Header;