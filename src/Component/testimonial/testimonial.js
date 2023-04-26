import './testimonial.css';
import { FeedBack } from './feedbackData';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
            <div className="testimonial_container">
                <div className='testimonial_head'>
                    <h3 className='test_head'>Our Testimonial</h3>
                    <p className='test-desc'>Clients Feedback</p>
                </div>

            <Slider {...settings}>
                
            {FeedBack.map((item) => (
                    <div className='test_card row'>
                        <div class="card t_card" style={{ width: '20rem', height: '22rem'}}>
                            <div class="card-body">
                                <p class="card-text">{item.data}</p>
                                <div className='row'>
                                    <img src={item.profile} alt='author' className='author col-lg-3' />
                                    <div className='col-lg-12 author_detail'>
                                        <h5>{item.Name}</h5>
                                        <p className=""><small className="text-muted">Estate Agent</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

                {/* <div class="card t_card" style={{width: '20rem'}}>
                        <div class="card-body">
                            <p class="card-text"> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                                <div className='row'>
                                <img src={author} alt='author' className='author col-lg-3' />
                                <div className='col-lg-12 author_detail'>
                                    <h5>William seklo</h5>
                                    <p className=""><small className="text-muted">Estate Agent</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card t_card" style={{width: '20rem'}}>
                        <div class="card-body">
                            <p class="card-text"> 
                                </p>
                                <div className='row'>
                                <img src={author} alt='author' className='author col-lg-3' />
                                <div className='col-lg-12 author_detail'>
                                    <h5>William seklo</h5>
                                    <p className=""><small className="text-muted">Estate Agent</small></p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* <div class="card t_card" style={{width: '20rem'}}>
                        <div class="card-body">
                            <p class="card-text"> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                                <div className='row'>
                                <img src={author} alt='author' className='author col-lg-3' />
                                <div className='col-lg-12 author_detail'>
                                    <h5>William seklo</h5>
                                    <p className=""><small className="text-muted">Estate Agent</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card t_card" style={{width: '20rem'}}>
                        <div class="card-body">
                            <p class="card-text"> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                                <div className='row'>
                                <img src={author} alt='author' className='author col-lg-3' />
                                <div className='col-lg-12 author_detail'>
                                    <h5>William seklo</h5>
                                    <p className=""><small className="text-muted">Estate Agent</small></p>
                                </div>
                            </div>
                        </div>
                    </div> */}


            </div>
        </>
    )
}

export default Testimonial;