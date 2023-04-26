import './Footer.css';
import logo from '../../Images/logo.png';
import payment from '../../Images/Icons/payment.png';

const Footer = () => {
    return (
        <>
            <div className='footer_container'>
                <div className='footer-box row'>
                    <div className='col-lg-6 '>
                        <h2 className='footer-head'>Looking for a dream home? </h2>
                        <p className='footer-desc'>We can help you realize your of a new home</p>
                    </div>
                    <div className='col-lg-6 footer_explore'>
                        <button className='explore-footer'>Explore Properties <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className='footer row'>
                    <div className='footer-desc col-lg-3 col-md-6 col-sm-6'>
                        <span><img src={logo} alt='logo' className='footer_logo' /></span>
                        <p>
                            Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
                        </p>
                        <span><i class="bi bi-geo-alt fb-icon"></i>Brooklyn, New York, United States</span><br />
                        <span><i class="bi bi-telephone-forward fb-icon"></i> +0123-456789</span><br />
                        <span><i class="bi bi-envelope fb-icon"></i>example@example.com</span>
                        <div className='row footer-icon' style={{ textAlign: 'center' }}>
                            <span className='col-lg-2 col-md-2 col-sm-2'><i class="bi bi-facebook "></i></span>
                            <span className='col-lg-2 col-md-2 col-sm-2'><i class="bi bi-twitter "></i></span>
                            <span className='col-lg-2 col-md-2 col-sm-2'><i class="bi bi-linkedin "></i></span>
                            <span className='col-lg-2 col-md-2 col-sm-2'><i class="bi bi-youtube "></i></span>
                        </div>
                    </div>
                    <div className='company-menu col-lg-2 col-md-6 col-sm-6'>
                        <h2>Company</h2>
                        <ul>
                            <li className='footer_list '>About</li>
                            <li className='footer_list '>Blog</li>
                            <li className='footer_list '>All Product</li>
                            <li className='footer_list '>Location Map</li>
                            <li className='footer_list '>FAQ</li>
                            <li className='footer_list '>Contact Us</li>
                        </ul>
                    </div>
                    <div className='company-menu col-lg-2 col-md-6 col-sm-6'>
                        <h2>Services</h2>
                        <ul>
                            <li className='footer_list '>Order Tracking</li>
                            <li className='footer_list '>Wish List</li>
                            <li className='footer_list '>Login</li>
                            <li className='footer_list '>My Account</li>
                            <li className='footer_list '>Terms & Conditions</li>
                            <li className='footer_list '>Promotional Offers</li>
                        </ul>
                    </div>
                    <div className='company-menu col-lg-2 col-md-6 col-sm-6'>
                        <h2>Customer Care</h2>
                        <ul>
                            <li className='footer_list '>Login</li>
                            <li className='footer_list '>My Account</li>
                            <li className='footer_list '>Wish List</li>
                            <li className='footer_list '>Order Tracking</li>
                            <li className='footer_list '>FAQ</li>
                            <li className='footer_list '>Contact Us</li>
                        </ul>
                    </div>
                    <div className='newsletter col-lg-3 col-md-6 col-sm-12'>
                        <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                        <span><input type='text' alt='email' className='email-news' placeholder='Email*' /><button className='arrow-btn'><i class="bi bi-arrow-up-right"></i></button></span>
                        <h3 className='we_accept'>We Accept</h3>
                        <img src={payment} alt='payment' className='payment' />
                    </div>
                </div>
                <div className='row privacy'>
                    <p className='col-lg-6 col-md-6 col-sm-12 rights'>All Rights Reserved @ Company 2023</p>
                    <div className='col-lg-6 col-md-6 col-sm-12 list_right'>
                        <ul className='row Terms-cond'>
                            <li className='col-lg-6 col-md-2 col-sm-3 privacy_list blank'></li>
                            <li className='col-lg-2 col-md-3 col-sm-2 privacy_list'>Terms & Condition</li>
                            <li className='col-lg-2 col-md-3 col-sm-2 privacy_list'>Claim</li>
                            <li className='col-lg-2 col-md-3 col-sm-2 privacy_list'>Privacy & Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;