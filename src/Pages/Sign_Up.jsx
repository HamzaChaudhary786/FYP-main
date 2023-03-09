import React from 'react';

import Navbar from '../Components/Navbar';
import SignUpHeroSection from '../Components/SignUpHeroSection';
import Footer from '../Components/Footer';

const Sign_Up = () => {
  return (
    <>
    <div className='bg-gray-900'>
        <Navbar/>
        <SignUpHeroSection/>
        <Footer/>
    </div>

    </>
  )
}

export default Sign_Up