import React from 'react'
import Cancer_Navbar from '../Components/Cancer_Navbar'
import Cancer_Hero_Section from '../Components/Cancer_Hero_Section'
import Footer from '../Components/Footer'

const Cancer = () => {
  return (
    <>
      <div className='bg-slate-900'>
        <Cancer_Navbar />
        <Cancer_Hero_Section />
        <Footer />
      </div>

    </>
  )
}

export default Cancer