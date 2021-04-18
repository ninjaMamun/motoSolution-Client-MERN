import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import firebaseConfig from '../../Login/firebase.config';
import { handleSignOut } from '../../Login/loginManager';
import firebase from "firebase/app";
import './Navbar.css';

const Navbar = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('userName');
                window.location.reload()


            })
    }

    const user = sessionStorage.getItem('user');
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('https://thawing-crag-71800.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            });


    }, [user])


    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }

    }
    return (

        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img className="navimg" src={logo} alt="..."></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ms-auto mb-2 mb-lg-0">

                        <Link to="/home" className="nav-link active nav-a fw-bolder m-1" aria-current="page">Home</Link>
                        <Link to="/appoinments" className="nav-link active nav-a fw-bolder m-1" >Book Appointment</Link>
                        
                        <Link to="/dashboard" className="nav-link active nav-a fw-bolder m-1" >Dashboard</Link>
                        

                        {
                            (loggedInUser.displayName || sessionStorage.getItem('userName')) ? <p className="nav-link nav-a m-1 active fw-bolder" >{loggedInUser.displayName || sessionStorage.getItem('userName')}</p> : (loggedInUser.email || sessionStorage.getItem('token')) ? <p className="nav-link nav-a m-1 active fw-bolder" >{loggedInUser.email}</p> : <Link to="/login"><p className="nav-link nav-a m-1 mouse active fw-bolder">Log In</p></Link>
                        }
                        {
                            (loggedInUser.displayName || loggedInUser.email || sessionStorage.getItem('token')) && <p onClick={signOut} className="nav-link nav-a m-1 mouse active fw-bolder">Log Out</p>
                        }
                    </div>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;