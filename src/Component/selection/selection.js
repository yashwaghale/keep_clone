import React from 'react';
import './selection.css';
import { Link } from 'react-router-dom';

const Selection = () => {
    return (
        <>
            <div className='selection_container row'>
                <div className='col-lg-3 col-md-6 '>
                    <form action="">
                        <select className='selector' name="cars">
                            <option className='option' value="area">Choose Area</option>
                            <option className='option' value="Mumbai">Mumbai</option>
                            <option className='option' value="Pune">Pune</option>
                            <option className='option' value="Delhi">Delhi</option>
                            <option className='option' value="Manali">Manali</option>
                        </select>
                    </form>
                </div>
                <div className='col-lg-3 col-md-6 '>
                    <form action="">
                        <select className='selector' name="cars">
                            <option className='option' value="Property_status">Property Status</option>
                            <option className='option' value="Open_house">Open House</option>
                            <option className='option' value="Rent">Rent</option>
                            <option className='option' value="Sale">Sale</option>
                            <option className='option' value="Sold">Sold</option>
                        </select>
                    </form>
                </div>
                <div className='col-lg-3 col-md-6 '>
                    <form action="">
                        <select className='selector' name="cars">
                            <option className='option' value="volvo">Property Type</option>
                            <option className='option' value="Apartment">Apartment</option>
                            <option className='option' value="Co-op">Co-op</option>
                            <option className='option' value="Condo">Condo</option>
                            <option className='option' value="single-family">Single Family House</option>
                        </select>
                    </form>
                </div>
                <div className='col-lg-3 col-md-6 '>
                    <button className='selection-submit'><Link to="/shop" className='find-link'>FIND NOW</Link></button>
                </div>
            </div>
        </>
    );
}

export default Selection