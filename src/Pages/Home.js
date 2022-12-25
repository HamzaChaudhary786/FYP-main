import React from 'react'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Crypto_News from '../Components/About/Crypto_News'

export const Home = () => {
  return (
    <>
      <div className='bg-slate-900'>
        <Navbar />
        <HeroSection />
        <Crypto_News/>
        <Footer />
      </div>
    </>
  )
}
