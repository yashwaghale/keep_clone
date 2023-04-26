import React from 'react';
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header row'>
                <div className='col-lg-7 col-md-7 nest-tower'>
                    <a className='Mail'><i className="bi bi-envelope"></i> info@webmail.com</a>
                    <a className='Add'><i className="bi bi-geo-alt"></i>15/A,Nest Tower, NYC</a>
                </div>

                <div className='col-lg-4 col-md-5 social-icon'>
                    <a ><i className="bi bi-facebook"></i></a>
                    <a><i className="bi bi-twitter"></i></a>
                    <a><i className="bi bi-instagram "></i></a>
                    <button className='Add-btn'>Add Listing</button>
                </div>
            </div>
        </>
    )
}

export default Header;