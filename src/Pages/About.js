import React from 'react';
import "../Style/Home.css"
import rohul from "../Images/rohul.png"

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
                            <h4 class="fw-bold text-success">Our Vision</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5">
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
                        <p class="text-muted">Connect the farmers with investors, consumers and cutting-edge technologies to make them more productive and successful.</p>
                    </div>
                </div>
                <div className="goal-item">
                    <div class="border p-2 partners rounded-3 bg-primary bg-opacity-10 h-100">
                        <h4 class="fw-bold text-primary">Our Mission</h4>
                        <p class="text-muted">Promoting food safety and creating economic opportunity for every member in the society (by supporting smallholder farmers with necessary funds</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;