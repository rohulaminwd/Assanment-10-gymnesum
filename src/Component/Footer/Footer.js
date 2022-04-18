import React from 'react';
import './footer.css'
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className='footer-container py-4'>
            <img src={logo} className='logo' alt="" />
            <footer className='container footer text-light my-4'>
                <div className="text-start footer-item" data-aos="zoom-in-right" data-aos-duration="500">
                    <h4>About Me</h4>
                    <p>This is Rohul amin. I am a Gymnasium trainer, I give this service yoga</p>
                    <p>1213 Park Street Avenue, NY city America</p>
                    <p>Read my blog</p>
                    <p>Success Story</p>
                </div>
                <div className="text-start footer-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <h4>Contact me</h4>
                    <p>After you decide to start training we will make sure you get the best fitness program.</p>
                    <h6>+01245234455</h6>
                    <h6>demo@gamil.com</h6>
                    <h6>1213 Park Street Avenue, NY city America</h6>
                </div>
                <div className="text-start footer-item" data-aos="zoom-in-left" data-aos-duration="800">
                    <h4>Quack Contact</h4>
                    <input type="email" name="" className='form-control mb-3 bg-input' placeholder='Enter your email' id="" required/>
                    <textarea name="" className='form-control mb-3 bg-input' placeholder='Enter Your massage' id="" cols="10" rows="1"></textarea>
                    <input type="submit" className='btn btn-success' value="Submit" />
                </div>
            </footer>
            <p className="text-muted text-center">copy Right &copy; 2022 Gymnasium</p>
        </div>
    );
};

export default Footer;