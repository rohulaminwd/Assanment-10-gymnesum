import React from 'react';
import "../Style/Home.css"
import rohul from "../Images/rohul.png"
import {FiFacebook} from 'react-icons/fi'
import {BsChatDotsFill} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const About = () => {
    return (
        <>
        <div className='container my-5'>
            <div className="card mb-3 text-start w-75 mx-auto">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={rohul} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center bg-success bg-opacity-10">
                        <div className="card-body">
                            <h4 class="fw-bold text-success">This is Rohul amin</h4>
                            <p className="card-text">I am a junior web developer, and Student in CSE of first base. 
                            I work as a full stock web developer. I am currently the five base student of Programming Hero. I like programming a lot. I like to work with my favorite hobby. This is a demo project of mine. Pray for me so that I can do something good.</p>
                            <div className="d-flex mb-3">
                                <button className='btn p-1 rounded-pill me-2 bt-social'><FiFacebook></FiFacebook></button>
                                <button className='btn p-1 rounded-pill mx-2 bt-social'><BsChatDotsFill></BsChatDotsFill></button>
                                <button className='btn p-1 rounded-pill mx-2 bt-social'><BsTwitter></BsTwitter></button>
                                <button className='btn p-1 rounded-pill mx-2 bt-social'><BsInstagram></BsInstagram></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5 text-start">
            <h4 className='text-success text-center fw-bolds my-5'>My MISSION VISION AND GOAL</h4>
            <div className="my-goal">
                <div className="goal-item">
                    <div class="border p-2 partners rounded-3 bg-info bg-opacity-10 h-100">
                        <h4 class="fw-bold text-info">Our Goal</h4>
                        <p class="text-muted">We are working on the Millennium Development Goals. Ensuring food safety and food security, Sustainability, Climate Change, Environment</p>
                    </div>
                </div>
                <div className="goal-item">
                    <div class="border p-2 partners rounded-3 bg-success bg-opacity-10 h-100">
                        <h4 class="fw-bold text-success">Our Vision</h4>
                        <p class="text-muted">My short-term vision is to place in a reputed organisation where I can enhance my skills and gain knowledge. My long-term goal is to get my organisation towards .</p>
                    </div>
                </div>
                <div className="goal-item">
                    <div class="border p-2 partners rounded-3 bg-primary bg-opacity-10 h-100">
                        <h4 class="fw-bold text-primary">Our Mission</h4>
                        <p class="text-muted">My mission is to be a good quality programmer. So I am working day and night to make my mission successful. Here are 100 life goal ideas to start building your future today! </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;