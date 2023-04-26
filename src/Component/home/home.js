import React from 'react';
import './home.css';
import Home from '../../Images/Home.png';
import { Link } from 'react-router-dom';


const Homediv = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className="carousel-item active" >
                        <div className='row home_container' alt="First slide">
                            <div className='image col-lg-6 col-md-6 col-sm-6'>
                                <img className="d-block w-100 home-img " src={(Home)}  />
                            </div>
                            <div className='home-list col-lg-6 col-md-6 col-sm-6'>
                                <span className='home-icon'><i className="bi bi-house-fill"></i> Real Estate Agency</span>
                                <h1 className='Heading'>Find Your Dream <br /> House By Us </h1>
                                <p className='Home_Deatail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <button className='enquiry-btn'><Link to="/about" className='enquiry-link'>Make An Enquiry</Link></button>
                            </div>
                        </div>
                    </div>

                
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a> */}
            </div>
        </>
    )
}

export default Homediv;
