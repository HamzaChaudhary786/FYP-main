import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/newLogo.png'

const Footer = () => {
    return (
        <>
            <footer className=' rounded-lg py-10  bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-white hover:to-gray-300'>
                <div className=' grid grid-cols-2 p-10 lg:p-0 lg:grid lg:grid-cols-3 lg:justify-items-center items-center'>
                    <div >
                        <h1 className=' font-bold'>ABOUT</h1>
                        <Link><div className=''>About us</div></Link>
                        <Link><div className=''>Our Chartter</div></Link>
                        <Link><div className=''>Stats</div></Link>
                        <Link><div className=''>Press</div></Link>
                        <Link><div className=''>Jobs</div></Link>

                    </div>
                    <div>
                        <h1 className=' font-bold'>SUPPORT</h1>
                        <Link><div className=''>Help Center</div></Link>
                        <Link><div className=''>Our Rules</div></Link>
                        <Link><div className=''>Creater Resource</div></Link>
                        <Link><div className=''>Forward Funds</div></Link>
                        <Link><div className=''>Branad Assets</div></Link>

                    </div>
                    <div>
                        <h1 className=' font-bold'>More FROM FUND WAY</h1>
                        <Link><div className=''>Help Center</div></Link>
                        <Link><div className=''>Our Rules</div></Link>
                        <Link><div className=''>Creater Resource</div></Link>
                        <Link><div className=''>Forward Funds</div></Link>
                        <Link><div className=''>Branad Assets</div></Link>

                    </div>
                </div>

                <div className=' grid grid-cols-2 lg:grid lg:grid-cols-3 lg:justify-items-center lg:items-center p-10 lg:p-0'>
                    <div className=' h-4 w-24 mb-10 cursor-pointer'>
                        <span className=' text-3xl text-indigo-600 mr-1 mt-2'>
                            <img src={logo} alt="Logo" />
                        </span>
                    </div>
                    <div className='flex ml-10 '>
                        <div className='mx-2 text-blue-800'><Link><ion-icon name="logo-facebook"></ion-icon></Link></div>
                        <div className='mx-2 text-sky-500'><Link><ion-icon name="logo-twitter"></ion-icon></Link></div>
                        <div className='mx-2 text-red-600'><Link><ion-icon name="logo-youtube"></ion-icon></Link></div>
                        <div className='mx-2 text-pink-500'><Link><ion-icon name="logo-instagram"></ion-icon></Link></div>
                        <div className='mx-2 text-black'><Link><ion-icon name="logo-github"></ion-icon></Link></div>

                    </div>
                    <div>
                        <div className=' grid items-center justify-items-center'>
                            <input type="email" className='mt-2 rounded-lg ' placeholder="  Please Type Email..." required />
                            <br></br>
                            <button className='h-8 w-24 p-1  rounded bg-gradient-to-r from-red-500 to-yellow-400'>Submit</button>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer