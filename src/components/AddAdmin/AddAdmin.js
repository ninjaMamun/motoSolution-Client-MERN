import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    
    const handleAdminAdd = (e) => {

        const admin = {
            name: name,
            email: email
        }

        fetch('https://thawing-crag-71800.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {

                    alert('Admin Added!');
                }
            })

        e.preventDefault();
    }

    


    return (
        <div className="container-fluid row">

            <Sidebar></Sidebar>

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control"/>
                    </div>

                    <button onClick={handleAdminAdd} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;