import React from 'react';
import Headabt from './Headabt.css'

const HomeAbout = (props) => {
    return (
        <>
            <div className='headabt_conatiner'>
                <h1>{props.title}</h1>
                <a>
                    <span className='home_abt'><i class="bi bi-house-door-fill"></i>Home</span>
                    <i class="bi bi-chevron-right"></i><span>{props.Name}</span>
                </a>
            </div>

        </>
    )
}

export default HomeAbout;
