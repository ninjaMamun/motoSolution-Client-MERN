import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAService = () => {
    const [file, setFile] = useState(null);
    const [serviceDescription, setServiceDescription] = useState("");
    const [serviceTitle, setServiceTitle] = useState("");
    const [availableSpace, setAvailableSpace] = useState("");
    const [serviceTime, setServiceTime] = useState("");
    const [servicePrice, setServicePrice] = useState("");


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        
            let formData = new FormData();
            formData.append('file', file);
            formData.append('serviceDescription', serviceDescription);
            formData.append('serviceTitle', serviceTitle);
            formData.append('availableSpace', availableSpace);
            formData.append('serviceTime', serviceTime);
            formData.append('servicePrice', servicePrice);
    
            fetch('https://thawing-crag-71800.herokuapp.com/addAService', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if(data){
                        alert("Service Added!");
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        

    e.preventDefault();
    }




    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0}}>
                <h5 className="text-brand">Add a Service</h5>
                <span className="mb-3">Please Fill up all field and give some time to upload the picture.A Alert will be given once saved</span>
                <form>
                    <div class="mb-3">
                        <input onChange={(e) => setServiceTitle(e.target.value)}  type="text" class="form-control" placeholder="Service Name" required></input>

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
                    <button onClick={(e) => handleSubmit(e)} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAService;