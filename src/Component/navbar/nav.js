import React, {useState} from 'react';
import './nav.css';
import logo from '../../Images/logo.png'
import menu from '../../Images/Icons/menu.png'
import { Link } from 'react-router-dom';



const Nav = () => {




    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className='row nav-container'>
                <div className='col-lg-3 col-md-5 col-sm-5 navbar-css'>
                    <img src={(logo)} className='logo' />
                </div>
                <div className='nav-list col-lg-6 col-md-1 col-sm-1'>
                    <ul className='list-content' >
                        <li className='content'><Link to="/" className='link'>Home</Link></li>
                        <li className='content'><Link to="/about" className='link'>About</Link></li>
                        <li className='content'><Link to="/shop" className='link'>Shop</Link></li>
                        {/* <li className='content'>News</li>
                        <li className='content'>Pages</li> */}
                        <li className='content'><Link to="/contact" className='link'>Contact</Link></li>
                    </ul>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 navbar-css'>
                    <a><i className="bi bi-search"></i></a>
                    <a><i className="bi bi-person"></i></a>
                    <a><i className="bi bi-cart3"></i></a>
                    <img src={menu} className='menu-icon' alt='menu'onClick={ToggleSidebar} />
                </div>
                {/* =================================================== */}
                <div className="container-fluid mt-3">

                    {/* <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <a className="navbar-brand text-primary mr-0">Company Logo</a>
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary"  >
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </nav> */}
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Sidebar Header</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times">X</i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link">Home</a></li>
                                <li><a className="sd-link">About</a></li>
                                <li><a className="sd-link">Shop</a></li>
                                <li><a className="sd-link">News</a></li>
                                <li><a className="sd-link">Pages</a></li>
                                <li><a className="sd-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
                </div>

                {/* ====================================================== */}
            </div>

        </>
    );
}

export default Nav;