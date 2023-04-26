import Header from '../Component/Header/header.js'
import Footer from '../Component/footer/Footer.js';
import Nav from '../Component/navbar/nav.js';
import HomeAbout from '../Component/Abouts/HeadAbt/Headabt.js';
import Properties from '../Component/properties/properties.js';


const Shop = () => {

    
    return(
        <>
            <Header />
            <Nav />
            <HomeAbout title='Shop' Name='Shop'/>
            <Properties />
            <Footer />
        </>
    )
}

export default Shop;