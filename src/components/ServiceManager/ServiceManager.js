import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faHandSpock, faClock, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import './ServiceManager.css'

const ServiceManager = () => {
    const [allServices, setAllServices] = useState([]);
    const [editServiceId, setEditServiceId] = useState('');
    const [isEditClicked, setIsEditClicked] = useState(false);

    const [file, setFile] = useState(null);
    const [serviceDescription, setServiceDescription] = useState("");
    const [serviceTitle, setServiceTitle] = useState("");
    const [availableSpace, setAvailableSpace] = useState("");
    const [serviceTime, setServiceTime] = useState("");
    const [servicePrice, setServicePrice] = useState("")
    const { register, handleSubmit, watch, errors } = useForm();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [allServices])

    const onSubmit = () => {
        let formData = new FormData();
        formData.append('file', file);
        formData.append('serviceDescription', serviceDescription);
        formData.append('serviceTitle', serviceTitle);
        formData.append('availableSpace', availableSpace);
        formData.append('serviceTime', serviceTime);
        formData.append('servicePrice', servicePrice);
        console.log(editServiceId);

        fetch(`https://thawing-crag-71800.herokuapp.com/updateService/${editServiceId}`, {
            method: 'PATCH',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsEditClicked(false);
                    alert("Successful");
                }
            })



    };



    const editClicked = (id) => {
        setEditServiceId(id);
        setIsEditClicked(true);
    }


    return (
        <div className="container-fluid row">

            <Sidebar></Sidebar>

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                {
                    allServices.length > 0 ||
                    <div class="row d-flex justify-content-center align-items-center mt-5 pt-5">
                        <div class="spinner-border m-5 p-5" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-body">

                                <div class="mb-3">
                                    <input onChange={(e) => setServiceTitle(e.target.value)} type="text" class="form-control" placeholder="Service Name" required></input>

                                </div>
                                <div class="mb-3">
                                    <textarea onChange={(e) => setServiceDescription(e.target.value)} type="text" class="form-control" placeholder="Description" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <input onChange={(e) => setServiceTime(e.target.value)} type="text" class="form-control " placeholder="8:00AM - 10:00PM" required></input>
                                </div>
                                <div class="mb-3">
                                    <input onChange={(e) => setAvailableSpace(e.target.value)} type="text" class="form-control " placeholder="Available Spaces" required></input>
                                </div>
                                <div class="mb-3">
                                    <input onChange={(e) => setServicePrice(e.target.value)} type="text" class="form-control " placeholder="1000Tk" required></input>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                </div>

                            </div>
                            <div class="modal-footer">
                                <span className="mb-3">Please Fill up all field and give some time to upload the picture.A Alert will be given once saved</span>
                                <button onClick={handleSubmit(onSubmit)} type="button" class="btn btn-primary" data-bs-dismiss="modal"><FontAwesomeIcon icon={faCheck} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <h4 className="text-center m-3">Service Manager</h4>
                    {
                        allServices.map(service => {
                            return <div className="col-3">

                                <div class="card m-3 te cus-div-card">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-12">
                                            <img style={{ height: '160px' }} src={`data:image/png;base64,${service.image.img}`} class="card-img-top" alt="..." />

                                        </div>
                                    </div>

                                    <div class="card-body text-center">
                                        <h5 class="card-title">{service.serviceTitle}</h5>
                                        <p class="card-text">{service.serviceDescription}</p>
                                        <p class="card-text"><FontAwesomeIcon icon={faClock} /> Time: {service.serviceTime}</p>
                                        <p class="card-text"><FontAwesomeIcon icon={faHandSpock} /> Space: {service.availableSpace}<br></br> <FontAwesomeIcon icon={faMoneyBillAlt} /> Price: {service.servicePrice}</p>
                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editClicked(service._id)} className="btn btn-primary mr-2">Edit <FontAwesomeIcon icon={faEdit} /></button>
                                    </div>


                                </div>
                            </div>
                        })
                    }




                </div>

            </div>
        </div>

    );
};

export default ServiceManager;