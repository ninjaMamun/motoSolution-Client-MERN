import React, { useState } from 'react';
import serviceBike from '../../../images/serviceBike.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({ handleDateChange }) => {
    const [value, onChange] = useState(new Date());



    return (
        <div className="container mt-3">
            <main className="row d-flex align-items-center justify-content-center">
                <div className="col-md-4 offset-md-1">
                    <h2 style={{ color: '#3A4256' }}>Appointment</h2>
                    <h4>Pick Your Service Date:</h4>

                    <Calendar
                        onChange={handleDateChange}
                        value={value}
                    />

                </div>
                <div className="col-md-6 text-center">
                    <img style={{ height: '380px', width: '100%' }} src={serviceBike} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;