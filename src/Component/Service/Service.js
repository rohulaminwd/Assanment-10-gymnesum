import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"
import useService from '../../Hooks/useService';

const Service = () => {
    const [service, setService] = useService();
    const servicesItem = service.filter(item => item.type.includes("service"));
         
    return (
        <div className='service'>
            {
                servicesItem.map(i => <div className='text-start'>
                    <div data-aos="zoom-in-down" 
                        data-aos-duration="1000"
                        className="service-item">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img">
                                <img src={i.img} className='img-fluid' alt="" />
                            </div>
                            <div className="fw-bold me-auto">
                                <p className='text-muted mb-0'>{i.subtitle}</p>
                                <h4>{i.name}</h4>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>{i.title}</p>
                            <Link className='text-decoration-none fw-bold' to='/checkout'>VIEW MORE</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Service;