import { Card } from 'react-bootstrap';
import './Amenities.css';
import parking from '../../Images/Icons/parking.png';
import pool_icon from '../../Images/Icons/pool_icon.png';
import security from '../../Images/Icons/security.png';
import medical from '../../Images/Icons/medical.png';
import book from '../../Images/Icons/book.png';
import bed from '../../Images/Icons/bed.png';
import smart_home from '../../Images/Icons/smart_home.png';
import playground from '../../Images/Icons/playground.png';


function Amenities() {
  return (
    <div className='Amenities_card'>
      <div className='amenities_head'>
        <h3 className='head-ame'>Our Amenities</h3>
        <p className='ame-desc'>Building Amenities</p>
      </div>
      <div className='row ame_card'>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={parking} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>Parking Space</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={pool_icon} alt="parking" className="parking_icon" />
              <a><i className="flaticon-swimming"></i></a>
              <Card.Text>
                <h3 className='parking_space'>Swimming Pool </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={security} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>Private Security</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={medical} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>Medical center</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={book} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>Library Area </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3'>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={bed} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>King Size Bed </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={smart_home} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>Smart Homes</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-3 '>
          <Card className='ame_Card' style={{ width: '16rem', height: '15rem' }}>
            <Card.Body>
              <img src={playground} alt="parking" className="parking_icon" />
              <Card.Text>
                <h3 className='parking_space'>Kid's Playland</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
      );
}

      export default Amenities;