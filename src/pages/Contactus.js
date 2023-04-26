import Header from '../Component/Header/header.js'
import Footer from '../Component/footer/Footer.js';
import Nav from '../Component/navbar/nav.js';
import HomeAbout from '../Component/Abouts/HeadAbt/Headabt.js';
import ContactMe from '../Component/Contactus/Contact.js';


const ContactUs = () => {
    return(
        <>
            <Header />
            <Nav />
            <HomeAbout title='Contact Us' Name='Contact'/>
            <ContactMe />
            <Footer />
        </>
    )
}

export default ContactUs;