import './Apartment.css';
import Studio from './Studio/studio';



const Apartment = () => {

    // const thestudio = () => {
    //  const Studios = <Studio /> 
    // document.getElementById('plans').innerHTML = Studios
    // }

    return (
        <>
            <div className='Apartment_container'>
                <div className="apartment">
                    <h6 className=" Apartment_us"> Apartment Sketch </h6>
                    <h1 className="Apartment_heading">Apartment Plans</h1>
                </div>
                {/* <nav className='Apartment_row'>
                    <ul className='row'>
                        <li className='col-lg-2 apartment_navbar' onClick={thestudio}>The Studio</li>
                        <li className='col-lg-2 apartment_navbar'>Deluxe Portion</li>
                        <li className='col-lg-2 apartment_navbar'>Penthouse</li>
                        <li className='col-lg-2 apartment_navbar'>Top garden</li>
                        <li className='col-lg-2 apartment_navbar'>Double Height</li>
                    </ul>
                </nav> */}

                <div>
                   <Studio />
                </div>
            </div>
                   
            
        </>
    )
}

export default Apartment;

