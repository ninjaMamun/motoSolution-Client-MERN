import React from 'react';
import featured from '../../../images/partner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import brands from '../../../images/brands.png'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 pt-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1 className="text-center">Our Partnership</h1>
                        <p className="text-secondary text-center">
                            We provide OFFICIAL service to some of the best motorcycle company in the country like:
                        </p>
                        <img style={{width: '100%'}} src={brands} alt=""/> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;