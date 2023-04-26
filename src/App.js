import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutnav from './pages/Aboutnav';
import Shop from './pages/Shop';
import ContactUs from './pages/Contactus';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<Aboutnav />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/contact' element={<ContactUs />}/>
            </Routes>
        </BrowserRouter>
            
        </>
    )
}

export default App;