import React from 'react';
import './Header.css';
import logo from "../../Assets/logo.png";

export const Header = () => {
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
                    <li><a href="/login">Login</a></li>
                    <li className="right"><a href="/role">Register</a></li>
                </div>
            </ul>
        </div>
    );
};

export default Header;