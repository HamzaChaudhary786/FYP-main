import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import SignHeroSection from '../Components/SignHeroSection';

const Sign_In = () => {
    return (
        <>
            <div className='bg-gray-900'>
                <Navbar />
                <SignHeroSection />
                <Footer />
            </div>

        </>
    )
}

export default Sign_In