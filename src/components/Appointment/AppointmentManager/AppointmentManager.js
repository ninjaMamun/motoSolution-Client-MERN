import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

const AppointmentManager = () => {
    const [allAppointments, setAllAppointment] = useState([]);
    const [editAppointmentId, setEditAppointmentId] = useState('');
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [orderStatus, setOrderStatus] = useState("");
    const { register, handleSubmit, watch, errors } = useForm();


    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/allAppointment')
            .then(res => res.json())
            .then(data => setAllAppointment(data))
    }, [allAppointments])


    const editClicked = (id) => {
        setEditAppointmentId(id);
        setIsEditClicked(true);
    }

    const onSubmit = () => {
        const appointmentData = {
            orderStatus: orderStatus
        };

        fetch(`https://thawing-crag-71800.herokuapp.com/update/${editAppointmentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsEditClicked(false);
                }
            })

    };




    return (

        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">

                    <div className="table-responsive">

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-body">

                                        <div className="col-12">
                                            <label className="my-1 mr-2" for="inlineFormInputName3">Update Status</label>
                                            <select className="form-select" onChange={(e) => setOrderStatus(e.target.value)} required >
                                                <option disabled={true} value="Not set" >Select Status</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Processing">Processing</option>
                                                <option value="Canceled">Cancel</option>
                                                <option value="Completed">Complete</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={handleSubmit(onSubmit)} type="button" class="btn btn-primary" data-bs-dismiss="modal"><FontAwesomeIcon icon={faCheck} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    allAppointments.map(appointment => {
                                        return <tr>
                                            <td>{appointment.name}</td>
                                            <td>{appointment.phone}</td>
                                            <td>{appointment.email}</td>
                                            <td>{appointment.service}</td>
                                            <td>{appointment.bikeModel}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.orderStatus}</td>
                                            <td><button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editClicked(appointment._id)} className="btn btn-primary mr-2"><FontAwesomeIcon icon={faEdit} /></button></td>
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

export default AppointmentManager;