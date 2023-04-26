import React from "react";
import './Lead.css';
import total_area from '../../Images/total_area.png';
import crane from '../../Images/crane.png';
import room from '../../Images/room.png';
import apartment from '../../Images/apartment.png';

const Lead = () => {

    
        const Number = Math.random()*1000,
        area = Math.floor(Number);

        const Sold = Math.random()*1000,
        sold = Math.floor(Sold);

        const Construction = Math.random()*1000,
        construction = Math.floor(Construction);

        const Rooms = Math.random()*1000,
        rooms = Math.floor(Rooms);

        
    
    return (
        <>
            <div className="Lead-container row">
                <div className="area col-lg-3 col-md-3 col-sm-6">
                    <img src={total_area} alt="Total-area"  className="lead_icon"/><br/>
                    <h1><span className="Lead_count">{area}</span>+</h1>
                    <h5 className="Lead_head">Total Area Sq</h5>
                </div>
                <div className="apartment col-lg-3 col-md-3 col-sm-6">
                    <img src={apartment} alt="Total-area"  className="lead_icon"/>
                    <h1><span className="Lead_count">{sold}</span>+</h1>
                    <h5 className="Lead_head">Apartment Sold</h5>
                </div>
                <div className="crane col-lg-3 col-md-3 col-sm-6">
                    <img src={crane} alt="Total-area" className="lead_icon" />
                    <h1><span className="Lead_count">{construction}</span>+</h1>
                    <h5 className="Lead_head">Total Construction</h5>
                </div>
                <div className="room col-lg-3 col-md-3 col-sm-6">
                    <img src={room} alt="Total-area"  className="lead_icon"/>
                    <h1><span className="Lead_count">{rooms}</span>+</h1>
                    <h5 className="Lead_head">Apartio Rooms</h5>
                </div>
            </div>
        </>
    );
}

export default Lead;