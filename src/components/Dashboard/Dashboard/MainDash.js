import React, { useContext } from 'react';
import { UserContext } from '../../../App';


import welcomeImg from '../../../images/undraw_Dashboard_re_3b76.png'
import Sidebar from '../Sidebar/Sidebar';

const MainDash = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const user = sessionStorage.getItem('user');
    if (user) {
        var name = user.substring(0, user.indexOf("@"));
    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12 d-flex justify-content-center ">
                <div className="row m-4">
                    <div className="col-12"><h1 className="text-center"> Welcome {sessionStorage.getItem('userName') ? <span>{sessionStorage.getItem('userName')}</span> : <span>{name.toUpperCase()}</span>}<br></br>To Your Dashboard</h1></div>
                    <div className="col-12 d-flex justify-content-center"><img style={{ height: '600px' }} src={welcomeImg} alt="..."></img></div>
                </div>

            </div>

        </div>
    );
};

export default MainDash;


