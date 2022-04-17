import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../Images/google.png'
import facebook from '../Images/fb.png'
import "../Style/Login.css"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }
    if(user){
        navigate(from, {replace: true})
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSignIn} action="">
                <div className="input-item">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id=""/>
                </div>
                <div className="input-item">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" />
                </div>
                {
                    loading && <p>Loading...</p>
                }
                <span style={{color: 'red'}}>{error}</span>
                <div className="btn-item">
                    <button className='login-btn btn'>Login</button>
                    <p>New to Gymnasium? <Link className='signup-link' to='/signup'>Create New Account</Link> </p>
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

export default Login;