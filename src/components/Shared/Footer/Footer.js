import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logo.png'

const Footer = () => {
    const noNamed = [
        { name: "CAR AUDIO SERVICE", link: "/emergency" },
        { name: "FREE OIL CHANGE", link: "/checkup" },
        { name: "ENGINE DIAGNOSTICS", link: "/personal-treatment" },
        { name: "CAR A/C RECHARGE", link: "/tooth-extract" },
        { name: "PARKING SENSORS CALIBRATION", link: "/checkup" },
        { name: "CAR BATTERY REPAIRS", link: "/checkup" }
    ]
    const ourAddress = [
        { name: "Mirpur-1, Dhaka-1216 ", link: "//google.com/map" },
        { name: "Bangladesh", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "CAR AUDIO SERVICE", link: "/emergency" },
        { name: "FREE OIL CHANGE", link: "/checkup" },
        { name: "ENGINE DIAGNOSTICS", link: "/personal-treatment" },
        { name: "CAR A/C RECHARGE", link: "/tooth-extract" },
        { name: "PARKING SENSORS CALIBRATION", link: "/checkup" },
        { name: "CAR BATTERY REPAIRS", link: "/checkup" }
    ]
    const services = [
        { name: "CAR AUDIO SERVICE", link: "/emergency" },
        { name: "FREE OIL CHANGE", link: "/checkup" },
        { name: "ENGINE DIAGNOSTICS", link: "/personal-treatment" },
        { name: "CAR A/C RECHARGE", link: "/tooth-extract" },
        { name: "PARKING SENSORS CALIBRATION", link: "/checkup" },
        { name: "CAR BATTERY REPAIRS", link: "/checkup" }
    ]
    return (
        <div class="footer-container pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div class="row my-3 justify-content-center py-3">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto ">
                                <img style={{ height: '60px'}} src={logo} alt="..."></img>
                                <div className="row d-flex p-2">
                                    <div className="col-1"><p className="icons" className="icons"><FontAwesomeIcon icon={faFacebookF} /> </p></div>
                                    <div className="col-1"><p className="icons" className="icons"> <FontAwesomeIcon icon={faInstagram} /> </p></div>
                                    <div className="col-1"><p className="icons" className="icons"> <FontAwesomeIcon icon={faGooglePlusG} /></p></div>

                                </div>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class=" mb-lg-4 bold-text text-white "><b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p class="mb-1">Brooklyn, NY 10003</p>
                                <p>USA</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 order-sm-1 order-3 align-self-end">
                                <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"> Copyright<span>&#174;</span> {(new Date()).getFullYear()} All Rights Reserved.</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class=" text-muted bold-text"><b>Shahriyar Mamun</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> shahriyar.m.mamun@gmail.com</small>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </footer>
        </div>




    );
};

export default Footer;