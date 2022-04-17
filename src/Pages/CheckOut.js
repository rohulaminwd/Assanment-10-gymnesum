import React from 'react';
import ClientReview from '../Component/ClientReview/ClientReview';
import useService from '../Hooks/useService';
import "../Style/Home.css"

const CheckOut = () => {
    const [service, setService] = useService();
    const checkOut = service.filter(item => item.type.includes("chekout"));
    return (
        <div className=''>
            <div className="check-out container my-5">
            {
                checkOut.map(i => <div>
                    <div className="checkout-item">
                        <h3 className='fw-bold py-3'>REGULAR MEMBERSHIP</h3>
                        <div className="bg-check position-relative" style={{ backgroundImage: `url(${i.img})`}}>
                            <div className="text-light py-4 w-100 h-100 bg-dark bg-opacity-75">
                                <span className='fs-1 fw-bold'>$ {i.month}</span>
                                <span className='fw-bold fs-5'>/month</span>
                            </div>
                        </div>
                        <div className="py-3 title">
                            {
                                i.title.map(i => <p>{i}</p>)
                            }
                        </div>
                        <button className='w-100 btn fw-bold fs-5 bg-primary bg-opacity-10'>JOIN NOW</button>
                    </div>
                </div>)
            }
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

export default CheckOut;