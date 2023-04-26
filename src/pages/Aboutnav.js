import Header from '../Component/Header/header.js'
import Nav from '../Component/navbar/nav.js';
import Info from '../Component/Abouts/about';
import Services from '../Component/Services/Services';
import Testimonial from '../Component/testimonial/testimonial';
import Footer from '../Component/footer/Footer';
import Headabt from '../Component/Abouts/HeadAbt/Headabt.js';

const Aboutnav = () => {
    return(
        <>
        <Header />
        <Nav />
        <Headabt title='About Us' Name='About'/>
        <Info />
        <Services />
        <Testimonial />
        <Footer />
        </>
    )
}

export default Aboutnav;