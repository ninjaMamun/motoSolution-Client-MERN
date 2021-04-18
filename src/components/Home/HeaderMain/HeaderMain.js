import React from 'react';
import { Link } from 'react-router-dom';
import heroBike from '../../../images/heroBike.jpg'
import './HeaderMain.css'

const HeaderMain = () => {

    return (
        <>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={heroBike} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Get the best service for your motorcycles</h1>
                        <p class="lead">Moto Solution is a Hi-Tech motorcycle service center which can be distinguished from other conventional service centers by it’s nature, diagnostics equipments and ensured quality and reliability.
                        <br></br><strong>Motto: To be your first and last hope</strong></p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4"><Link to="/appoinments" className="text-white">
                                <span className="text-dark">Book Appointment</span>
                            </Link></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMain;