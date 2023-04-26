import React from 'react';
// import './App.css';
import Header from '../Component/Header/header'
import Nav from '../Component/navbar/nav.js';
import Homediv from '../Component/home/home.js';
import Selection from '../Component/selection/selection';
import Info from '../Component/Abouts/about';
import Lead from '../Component/Leads/Lead';
import Sale from '../Component/Sale_property/sale';
import Services from '../Component/Services/Services';
import Properties from '../Component/properties/properties';
import Apartment from '../Component/Apartments/Apartment';
import Amenities from '../Component/Amenities/Amenities';
import Testimonial from '../Component/testimonial/testimonial';
import Footer from '../Component/footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Nav />
            <Homediv />
            <Selection />
            <Info />
            <Lead />
            <Sale />
            <Services />
            <Properties />
            <Apartment />
            <Amenities />
            <Testimonial />
            <Footer />

        </>
    )
}

export default Home;