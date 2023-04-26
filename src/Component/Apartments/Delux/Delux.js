import './Delux.css';
import image from '../../../Images/studio_img.png';

const Delux = () => {
    return (
        <>
            <div className='studio_container row'>
                <div className='studio_content col-lg-6'>
                    <h3 className='std-head'>The Deluxe</h3>
                    <p className='std-content'>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                        Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.
                        Incididunt labore et dolore magna aliqua. sed ayd minim veniam.
                    </p>
                    <ul className='std-list'>
                        <li className='studio-desc'>Total Area<span> ............................................................</span>2800 Sq.ft</li>
                        <li className='studio-desc'>Bedroom<span> ...............................................................</span>150 Sq.ft</li>
                        <li className='studio-desc'>Bathroom<span> ..............................................................</span>45 Sq.ft</li>
                        <li className='studio-desc'>Balcony<span> ...............................................................</span> Allowed</li>
                        <li className='studio-desc'>Lounge<span> ................................................................</span>650 Sq.ft</li>
                    </ul>
                </div>
                <div className='studio_image col-lg-6'>
                    <img src={image} alt='studio_img' className='studio_img'/>
                </div>
            </div>
        </>
    )
}

export default Delux;