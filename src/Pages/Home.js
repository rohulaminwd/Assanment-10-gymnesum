import React from 'react';
import { Link } from 'react-router-dom';
import ClientReview from '../Component/ClientReview/ClientReview';
import Service from '../Component/Service/Service';
import banner from "../Images/person.png"
import "../Style/Home.css"

const Home = () => {
    return (
        <div className=''>
            <div className="banner py-5">
                <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <div className="p-3 text-center" data-aos="fade-right" data-aos-duration="700">
                            <h1 className='fw-bold text-success'>Time To Start</h1>
                            <h1 className='fw-bold text-primary display-4'>GYMNASIUM</h1>
                            <p className='fw-bold my-3'>Welcome to my Gymnasium, This is Rohul Amin, I am a Gym trainer, A Personal trainer Who has that Extra Educational will have more Knowledge and tools to help you..!</p>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                                <Link to='/checkout' className='btn fw-bold btn-outline-primary border-3 rounded-pill me-3'>JOIN NOW</Link>
                                <Link to='/checkout' className='btn fw-bold btn-outline-primary border-3 rounded-pill'>VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="p-3" data-aos="fade-left" data-aos-duration="800">
                            <img src={banner} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="service-section my-5 ">
                <h3 className='my-5 fw-bold text-primary'>OUR BEST SERVICES!</h3>
                <div className="container">
                <Service></Service>
                </div>
            </div>

            <div className="client-review my-5">
                <h3 className='my-5 fw-bold text-primary'>What Our Clients Say!</h3>
                <div className="container">
                    <ClientReview></ClientReview>
                </div>
            </div>
        </div>
    );
};

export default Home;