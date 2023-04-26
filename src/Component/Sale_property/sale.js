import React from "react";
import './sale.css';
import sale from '../../Images/sale.png';
import sale1 from '../../Images/sale1.png';
import sale2 from '../../Images/sale2.png';
import sale3 from '../../Images/sale3.png';
import bed from '../../Images/bed.png';
import bath from '../../Images/bath.png';
import parking from '../../Images/parking.png';
import network from '../../Images/network.png';



const Sale = () => {
    return (
        <>
            <div className="sale_container ROW">
            <div className="sale-content col-lg-6 ">
                    <h6 className="sale_us">sale Us</h6>
                    <h1 className="sale_heading">Today's Sales Property</h1>
                    <p className="sale_details">Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                    <div className="sale_content">
                        <ul>
                            <li>Live Music Cocerts at Luviana</li>
                            <li>Our SecretIsland Boat Tour is Just for You</li>
                            <li>Live Music Cocerts at Luviana</li>
                            <li>Live Music Cocerts at Luviana</li>
                        </ul>
                    </div>

                    <div className="row icon_container">
                        <ul className="sale-ul col-lg-3 col-md-3 col-sm-3 ">
                            <li><img src={bed} alt="bedroom" className="sale-icon" /> <br/>3 Bedrooms</li>
                        </ul>
                        <ul className="sale-ul col-lg-3 col-md-3 col-sm-3 ">
                            <li><img src={bath} alt="bedroom" className="sale-icon" /> <br/>2 Bathrooms</li>
                        </ul>
                        <ul className="sale-ul col-lg-3 col-md-3 col-sm-3 ">
                            <li><img src={parking} alt="bedroom" className="sale-icon" /> <br/>2 Car parking</li>
                        </ul>
                        <ul className="sale-ul col-lg-3 col-md-3 col-sm-3 ">
                            <li><img src={network} alt="bedroom" className="sale-icon" /><br/>3450 Sq. Ft.</li>
                        </ul>
                        
                    </div>
             
                    <div className="image_conatiner row">
                        <div className="sales1 col-lg-4 col-md-4 col-sm-4">
                            <img src={sale1} alt="image1" className="sale_img"/>                 
                        </div>
                        <div className="sales1 col-lg-4 col-md-4 col-sm-4">
                            <img src={sale2} alt="image2" className="sale_img"/>                 
                        </div>
                        <div className="sales1 col-lg-4 col-md-4 col-sm-4">
                            <img src={sale3} alt="image3" className="sale_img"/>                 
                        </div>
                    </div>

                </div>

                <div className="sales_img col-lg-6 ">
                    <img src={sale} alt="sale_image" className="abt_img" />
                   
                </div>
                
            </div>
        </>
    )
}

export default Sale;