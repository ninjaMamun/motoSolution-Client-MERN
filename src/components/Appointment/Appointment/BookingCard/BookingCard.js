import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css'

const BookingCard = ({ booking, date }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    console.log(booking)


    return (


        <div className="col-md-4 mb-5">
            <div className="card p-3 booking-card">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.serviceTitle}</h5>
                    <h6>{booking.serviceDescription}</h6>
                    <h6>{booking.serviceTime}</h6>
                    <p>{booking.availableSpace} SPACES AVAILABLE</p>
                    <p>Price: {booking.servicePrice}</p>
                    <button onClick={openModal} className="btn btn-outline-secondary text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.serviceTitle} closeModal={closeModal} date={date} bookingPrice={booking.servicePrice}></AppointmentForm>

                </div>
                
            </div>
        </div>


    );
};

export default BookingCard;