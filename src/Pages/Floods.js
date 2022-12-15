import React from 'react'
import Navbar from "../Components/Navbar"
import Flood_Hero_Section from '../Components/Flood_Hero_Section'
import Footer from "../Components/Footer"
const Floods = () => {
  return (
    <>
      <div className=' bg-gray-900'>
        <Navbar />
        <Flood_Hero_Section />
        <Footer />
      </div>

    </>
  )
}

export default Floods