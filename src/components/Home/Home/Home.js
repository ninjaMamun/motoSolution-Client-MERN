import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import OurMission from '../OurMission/OurMission';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <CustomerReview></CustomerReview>
            <OurMission></OurMission>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home; 