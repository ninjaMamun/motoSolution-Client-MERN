import React, { useEffect, useState } from 'react';
import caraudio from '../../../images/caraudio.png';
import oil from '../../../images/car-oil.png';
import engine from '../../../images/car-engine.png';
import ac from '../../../images/car-ac.png';
import parkingsensor from '../../../images/parking-sensor.png';
import battery from '../../../images/battery.png';
import BookingCard from '../Appointment/BookingCard/BookingCard';
import { Link } from 'react-router-dom';


const BookAppointment = ({ date }) => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [allServices])


    return (
        <section className="container">
            <h2 className="text-center text-brand mb-5 mt-5">Available Appointments on {date.toDateString()}</h2>
            {
                allServices.length > 0 ||
                <div class="row d-flex justify-content-center align-items-center mt-5 pt-5">
                    <div class="spinner-border m-5 p-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="row d-flex">
                {
                    allServices.map(booking => <BookingCard key={booking.id} booking={booking} date={date} ></BookingCard>)
                }
            </div>
            
        </section>
    );
};

export default BookAppointment;