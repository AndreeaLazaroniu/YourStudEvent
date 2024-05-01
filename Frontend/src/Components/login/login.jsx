import React, {useState} from 'react';
import axios from "axios";
import './login.css';
import logo from '../../Assets/logo.png';
import { MdEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate} from "react-router-dom";
import {AuthContext} from "../../AuthContext";
import collage_events from "../../Assets/collage-events.png";

export const Login = () => {
    // const [Email, setEmail] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = React.useContext(AuthContext) // Add this line


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'UserName':
                setUserName(value);
                break;
            case 'Password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:44317/api/account/login', {
                UserName,
                Password
            });

            const result = response.data;
            localStorage.setItem('token', result.token);

            // Set the token in axios headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;

            if(response.status){
                setIsLoggedIn(true);
                navigate('../myProfile');
            }
        }catch (e) {
            if (error.response) {
                setError(error.response.data.message);
                console.error('error:', error.response.data.message);
            } else if(error.request) {
                console.error('error:', error.request);
            } else {
                console.error('error', error.message);
            }
        }
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //
    //     try{
    //         const response = await axios.post('https://localhost:44317/api/account/login', {
    //             UserName,
    //             Password
    //         });
    //
    //         if(response.status){
    //             setIsAuthenticated(true);
    //             navigate('../MyProfile');
    //         }
    //     }catch (error)
    //     {
    //         if (error.response) {
    //             setError(error.response.data.message);
    //             console.error('error:', error.response.data.message);
    //         } else if(error.request) {
    //             console.error('error:', error.request);
    //         } else {
    //             console.error('error', error.message);
    //         }
    //     }
    // }

    return (
        <body className="main" style={
            {backgroundImage: `url(${collage_events})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                position: "fixed",
                top: "0"
            }
        }>
            <div className="login">
                <div className="logo">
                    <img id="loginlogo" src={logo} className="img" alt="Your StudEvent"/>
                </div>
                <h1 className="login-heading">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required value={UserName} onChange={(e) => setUserName(e.target.value)}/>
                        <MdEmail className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required value={Password} onChange={(e) => setPassword(e.target.value)}/>
                        <AiOutlineLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="button">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="./role">Register</a></p>
                    </div>
                </form>
            </div>
        </body>
    );
}