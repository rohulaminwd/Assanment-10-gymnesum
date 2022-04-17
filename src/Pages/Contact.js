import React, { useEffect, useState } from 'react';
import "../Style/Home.css"
import contact from "../Images/contact.jpg"

const Contact = () => {
    const [map, setMap] = useState([]);
    
    useEffect(() => {
        fetch('GoogleMap.json')
        .then(res => res.json())
        .then(data => setMap(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <div className="p-3 rounded-3">
                            <img src={contact} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="border rounded-3 p-3 h-100 contact">
                            <h3 className='fw-bold text-primary mb-4'>Contact Me</h3>
                            <form action="">
                                <input className='form-control mb-3' type="text" name="name" placeholder='Enter Your name' id="" required/>
                                <input className='form-control mb-3' type="text" name="Phone" placeholder='Enter Your Phone' id="" required/>
                                <input className='form-control mb-3' type="email" name="email" placeholder='Enter Your email' id="" required/>
                                <textarea className='form-control mb-3' name="massage" id="" cols="30" rows="5"></textarea>
                                <button className='btn btn-outline-primary fw-bold fs-5 w-100'>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="location my-5">
                    {
                        map.map(i => <iframe className='google-map w-100' 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        src={i.map}></iframe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;