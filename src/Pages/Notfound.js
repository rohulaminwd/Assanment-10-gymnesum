import React from 'react';
import NotFound from '../Images/NotFound.jpg'
import '../Style/Home.css'

const Notfound = () => {
    return (
        <div className='text-danger mt-5'>
            <div className="w-50 mx-auto bg-danger bg-opacity-25 rounded-3 p-3">
                <h1>Opp,s NO..!! Page are NOt found</h1>
                <h1>404 Error..!!</h1>
            </div>
            <div className="p-5 margin-top">
                <img src={NotFound} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default Notfound;