import './properties.css';
import bed from '../../Images/bed.png';
import bath from '../../Images/bath.png';
import network from '../../Images/network.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PropertyData } from './propertydata';


const Properties = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <div className='properties_container'>
                <h5 className="our-service">Properties</h5>
                <h1 className="main-focus">Featured Listing</h1>


                <Slider {...settings}>
                    {PropertyData.map((item) => (
                        <div className="card-group property-group ">
                            <div className="card property_card ">
                                <div>
                                    <img className="card-img" src={item.img} alt="Card cap" />
                                    <div className='for_rent'>For Rent</div>
                                    <div className='location_prop'><i class="bi bi-geo-alt"></i> Belmont Gardens, Chicago</div>
                                    <div className='camera'><i class="bi bi-camera" > 4 </i> | <i class="bi bi-camera-reels"> 2 </i></div>
                                </div>

                                <div className="card-body">
                                    <p className='price'><span>{item.price}</span>/month</p> <br/>
                                    <h5 className="card-title property_title">{item.title}</h5>
                                    <p className="card-text property_text">{item.desc}</p>
                                    <div className="row bedrooms-ul">
                                        <ul className="property-ul col-lg-4  col-md-4 col-sm-4">
                                            <li> 3 <img src={bed} alt="bedroom" className="property-icon" /><br />Bedrooms</li>
                                        </ul>
                                        <ul className="property-ul col-lg-4 col-md-4 col-sm-4">
                                            <li> 2 <img src={bath} alt="bedroom" className="property-icon" /><br />Bathrooms</li>
                                        </ul>
                                        <ul className="property-ul col-lg-4 col-md-4  col-sm-4">
                                            <li> 3450 <img src={network} alt="bedroom" className="property-icon" /><br />Sq. Ft.</li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className='row author-det'>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <img src={item.developer} alt='author' className='author' />
                                        </div>
                                        <div className='col-lg-10 col-md-10 col-sm-10 author_detail'>
                                            <h5>William seklo</h5>
                                            <p className=""><small className="text-muted">Estate Agent</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>


            </div>

        </>
    );
}

export default Properties;