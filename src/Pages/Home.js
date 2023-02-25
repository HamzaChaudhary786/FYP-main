import React from 'react'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Crypto_News from '../Components/About/Crypto_News'
import Stats from '../Components/Stats'

export const Home = () => {
  return (
    <>
      <div className='bg-gray-900'>
        <Navbar />
        <HeroSection />
        <Crypto_News/>
        <Stats/>
        <Footer />
      </div>
    </>
  )
}
