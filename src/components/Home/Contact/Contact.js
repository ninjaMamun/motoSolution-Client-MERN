import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section id="contact" className="container mb-5">
            <div class="section-content">
                <h1 class="section-header text-dark">Get in Touch with us</h1>
                <h4 className="text-dark" >Send Your Query, We will be in touch soon</h4>
            </div>
            <div class="contact-section">
                <div class="container">
                    <form>
                        <div className="row d-flex">
                            <div class="col-md-6 form-line">
                                <div class="form-group">
                                    <label for="exampleInputUsername"><span className="text-dark">Your name</span></label>
                                    <input type="text" class="form-control" id="" placeholder=" Enter Name"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail"><span className="text-dark">Your Email</span></label>
                                    <input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id"></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="description"><span className="text-dark">Message</span></label>
                                    <textarea class="form-control" id="description" placeholder="Enter Your Message"></textarea>
                                </div>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-default btn-outline-dark"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
            </div>
        </section>
    );
};

export default Contact;


