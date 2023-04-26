import React from "react";
import './about.css';
import About from '../../Images/About.png'
import video from '../../Images/video-img.png'


const Info = () => {
    return (
        <>
            <div className="About_container ROW">
                <div className="about_img col-lg-6 col-md-12">
                    <img src={About} alt="about_image" className="abt_img" />
                </div>
                <div className="about-content col-lg-6 col-md-12">
                    <h6 className="About_us">About Us</h6>
                    <h1 className="about_heading">The Leading Real Estate Rental MarketPlace</h1>
                    <p className="about_details">Over 39,000 people work for us in more than 70 countries all over the
                        This breadth of global coverage, combined with specialist services</p>

                    <div className="row">
                        <ul className="about-ul col-lg-6 col-md-6">
                            <li><i className="bi bi-house-gear-fill about-icon"></i> Smart Home Design</li>
                            <li><i className="bi bi-cloud-sun-fill about-icon"></i> Beautiful Scene Around</li>
                        </ul>
                        <ul className="about-ul col-lg-6 col-md-6">
                            <li><i className="bi bi-activity about-icon "></i> Exceptional lifestyle </li>
                            <li><i className="bi bi-file-earmark-lock2-fill about-icon "></i> Complete 24/7 Security</li>
                        </ul>
                    </div>
                    <button className="services">OUR SERVICES</button>

                </div>

            </div>
        </>
    )
}

export default Info;