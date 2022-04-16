import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../Images/google.png'
import facebook from '../Images/fb.png'
import "../Style/Login.css"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Correct, setCorrectPss] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleCorrectPass = event => {
        setCorrectPss(event.target.value);
    }


    const handleCreatUser = (event) => {
        event.preventDefault();
    }
    return (
        <div className='login-container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleCreatUser}>
                <div className="input-item">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="" required />
                </div>
                <div className="input-item">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" required />
                </div>
                <div className="input-item">
                    <label htmlFor="password">Correct Password</label>
                    <input onBlur={handleCorrectPass} type="password" name="password" id="" required />
                </div>
                <span style={{color: 'red'}}>{error}</span>
                <div className="btn-item">
                    <button className='login-btn btn'>Sign Up</button>
                    <p>Already have an account? <Link to='/login' className='signup-link'>Login</Link> </p>
                </div>
                <div className="or-item">
                    <div className="item"></div>
                    <span>OR</span>
                    <div className="item"></div>
                </div>
                <div className="google-sign mb-3">
                    <img className='google' src={google} alt="" />
                    <p className='w-100 fw-bold mt-3 text-center'>Sign in With Google</p>
                </div>
                <div className="google-sign">
                    <img className='google' src={facebook} alt="" />
                    <p className='w-100 fw-bold mt-3 text-center'>Sign in With Facebook</p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;