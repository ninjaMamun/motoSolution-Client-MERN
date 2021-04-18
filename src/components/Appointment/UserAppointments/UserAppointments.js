import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';



const UserAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const user = sessionStorage.getItem('user');


    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/userAppointment?email=' + user, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [])



    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">

                    <div className="table-responsive">


                        <table className="table caption-top">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    appointments.map(appointment => {
                                        return <tr>
                                            <td>{appointment.name}</td>
                                            <td>{appointment.phone}</td>
                                            <td>{appointment.email}</td>
                                            <td>{appointment.service}</td>
                                            <td>{appointment.bikeModel}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.orderStatus}</td>
                                            
                                        </tr>

                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UserAppointments;