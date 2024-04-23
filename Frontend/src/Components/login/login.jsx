import React, {useState} from 'react';
import axios from "axios";
import './login.css';
import logo from '../../Assets/logo.png';
import { MdEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";

export const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try{
            const response = await axios.post('https://localhost:44320/api/Auth/login', {
                Email,
                Password
            });

            if(response.status){
                console.log('Login successful', response.data);
            }
        }catch (error)
        {
            if (error.response) {
                setError(error.response.data.message);
                console.error('error:', error.response.data.message);
            } else if(error.request) {
                console.error('error:', error.request);
            } else {
                console.error('error', error.message);
            }
        }
    }

    return (
        <div className="login">
            <div className="logo">
                <img id="loginlogo" src={logo} className="img" alt="Your StudEvent"/>
            </div>
            <h1 className="login-heading">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="input-box">
                    <input type="text" placeholder="email" required value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="parola" required value={Password} onChange={(e) => setPassword(e.target.value)}/>
                    <AiOutlineLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="button">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}