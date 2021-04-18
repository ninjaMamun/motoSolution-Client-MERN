import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Link } from 'react-router-dom';



const Services = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [allServices])

    const latestServices = allServices.slice(Math.max(allServices.length - 8, 0));

    return (
        <section className="services-container mt-5 pt-4">
            <div className="text-center">
                <h2>OUR SERVICES</h2>
                <p className="text-secondary">We can help you with everything from an oil change to an engine change.<br></br>
                    We can handle any problem on both foreign and domestic vehicles.</p>
            </div>
            {
                allServices.length > 0 ||
                <div class="row d-flex justify-content-center align-items-center mt-5 pt-5">
                    <div class="spinner-border m-5 p-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-2">
                        {
                            latestServices.reverse().map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                        }

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4"><Link to="/appoinments" className="text-white">
                        <span className="text-dark">Book Appointment</span>
                    </Link></button>
                </div>
            </div>






        </section>
    );
};

export default Services;

