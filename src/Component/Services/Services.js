import React from "react";
import './Services.css';
import service1 from '../../Images/service1.png';
import service2 from '../../Images/service2.png';
import service3 from '../../Images/service3.png';

const Services = () => {
    return (
        <>
            <div className="service_container">
                <div className=" service-card">
                    <h5 className="our-service">Our Services</h5>
                    <h1 className="main-focus">Our Main Focus</h1>
                    <div>
                        <div className="card-group ">
                            <div className="card">
                                <img src={service1} className="card-img-top image_top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Buy a Home</h5>
                                    <p className=" service_content">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    <p clasName="card-text find_home">Find A Home <i className="bi bi-arrow-right"></i></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={service2} className="card-img-top image_top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Rent a Home</h5>
                                    <p className=" service_content">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    <p clasName="card-text find_home">Find A Home <i className="bi bi-arrow-right"></i></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={service3} className="card-img-top image_top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Sell a Home</h5>
                                    <p className=" service_content">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                    <p clasName="card-text find_home">Find A Home <i className="bi bi-arrow-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services;