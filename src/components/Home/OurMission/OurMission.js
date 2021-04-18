import React from 'react';
import './OurMission.css';
import mission from '../../../images/mission.jpg'

const OurMission = () => {
    return (
        <section className="container">
            <div className="row container mission mt-5">
                <div className="col-md-6 col-sm-12">
                    <h2>
                        OUR MISSION And VISON
                    </h2>
                    <p>
                        We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed by highly qualified mechanics. We can handle any car problem.<br></br><br></br>

                        We offer a full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.
                    </p>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Read More</button>


                </div>
                <div className="col-md-6 col-sm-12 ">

                    <img src={mission} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />

                </div>
            </div>

        </section>
    );
};

export default OurMission;