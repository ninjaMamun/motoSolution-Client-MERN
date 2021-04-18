import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faStar, faBriefcase, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import { handleSignOut } from '../../Login/loginManager';
import firebaseConfig from '../../Login/firebase.config';
import firebase from "firebase/app";

const Sidebar = () => {
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
    const [isAdmin, setIsAdmin] = useState(false);
    const user = sessionStorage.getItem('user');


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



    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {
                    !isAdmin &&
                    <div>
                        <li>
                            <Link to="/dashboard/addReview" className="text-white">
                                <FontAwesomeIcon icon={faStar} /> <span>Add Review</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/userAppointment" className="text-white">
                                <FontAwesomeIcon icon={faStar} /> <span>Your Appointments</span>
                            </Link>
                        </li>
                    </div>




                }
                {isAdmin && <div>
                    <li>
                        {/* <Link to="/dashboard/appointments" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments By Date</span>
                        </Link> */}
                    </li>
                    <li>
                        <Link to="/dashboard/manageAppointments" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Appointment</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/addService" className="text-white" >
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/serviceManager" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Service Manager</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <p onClick={signOut} className="text-white mouse"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></p>
            </div>
        </div>
    );
};

export default Sidebar;