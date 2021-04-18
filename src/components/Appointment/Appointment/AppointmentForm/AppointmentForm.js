import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date, bookingPrice }) => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [name, setName] = useState(loggedInUser.displayName);
    const [email, setEmail] = useState(loggedInUser.email);
    const [phone, setPhone] = useState("");
    const [odo, setOdo] = useState("");
    const [bikeModel, setBikeModel] = useState("");
    const [vehicleType, setVehicleType] = useState("");




    const handlePaymentSuccess = (paymentId) => {
        if (paymentId) {

            const data = {
                service: appointmentOn,
                date : date,
                created : new Date(),
                price : bookingPrice, 
                paymentID : paymentId,
                name: name, 
                email: email,
                phone: phone,
                odo: odo,
                bikeModel: bikeModel,
                vehicleType: vehicleType,
                orderStatus: "Pending"
            }

            // data.service = appointmentOn;
            // data.date = date;
            // data.created = new Date();
            // data.price = bookingPrice;
            // data.paymentId = paymentId;

            fetch('https://thawing-crag-71800.herokuapp.com/addAppointment', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(success => {
                    if (success) {
                        closeModal();
                        alert('Appointment created successfully.');
                    }
                })

        }
    }


    // const onSubmit = data => {
    //     data.service = appointmentOn;
    //     data.date = date;
    //     data.created = new Date();
    //     data.price = bookingPrice;

    //     fetch('https://thawing-crag-71800.herokuapp.com/addAppointment', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(success => {
    //             if (success) {
    //                 closeModal();
    //                 alert('Appointment created successfully.');
    //             }
    //         })

    // }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <h4>Price: {bookingPrice}</h4>
                <form>
                    <div class="mb-3">
                        <input defaultValue={loggedInUser.displayName} onChange={(e)=> setName(e.target.value)} type="text" required name="name" placeholder="Your Name" className="form-control" />

                    </div>
                    
                    <div class="mb-3">
                        <input defaultValue={loggedInUser.email} onChange={(e)=> setEmail(e.target.value)} type="text" required name="email" placeholder="Email" className="form-control" ></input>
                    </div>
                    <div class="mb-3">
                        <input onChange={(e)=> setPhone(e.target.value)} type="text" required name="phone" placeholder="01XXXXXXXXXXX" className="form-control" />
                    </div>
                    <div class="mb-3">
                        <div className="form-group row">
                            <div className="col-4">
                                <select onChange={(e)=> setVehicleType(e.target.value)} className="form-select" name="gender" required >
                                    <option value="Not set">Select Vehicle</option>
                                    <option value="MotorBike">MotorBike</option>
                                    <option value="Scooter">Scooter</option>
                                    <option value="ElectricBike">Electric Bike</option>
                                </select>
                            </div>
                            <div  className="col-4">
                                <input onChange={(e)=> setOdo(e.target.value)} required className="form-control" name="currentODO" placeholder="current ODO" type="text" />
                            </div>
                            <div className="col-4">
                                <input onChange={(e)=> setBikeModel(e.target.value)} required className="form-control" name="BikeModel" placeholder="BikeModel" type="text" />
                            </div>
                        </div>
                    </div>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </form>



            </Modal>
        </div>
    );
};

export default AppointmentForm;