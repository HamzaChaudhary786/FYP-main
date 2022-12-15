import React from 'react'
import Button from '../Button'
import logo from '../..//Assets/logopng.png'
import logo22 from '../../Assets/logopng2.png'
import logo33 from '../../Assets/logopng3.png'
import logo2 from '../../Assets/sheri.png'
import logo1 from '../../Assets/hamza.png'
import logo3 from '../../Assets/moiz.png'
import { Link } from 'react-router-dom'
const HeroSection = () => {



    const scrollToTop = () => {
        window.scrollTo(500, 480)
    }
    return (
        <>
            <div className=' bg-gray-900 '>
                <div className=' grid grid-cols-1 lg:grid lg:grid-cols-2  '>


                    <div className='pl-24 pr-24 pt-24  text-green-200 text-3xl '>

                        <h1 className='text-green-500 text-4 lg:text-6xl font-bold'> ABOUT</h1>
                        <div className='mt-6 font-semibold   w-96 '>Your decentralised cloud computing network.</div>
                        <p className='mt-6 '>We unite cloud and blockchain to make computing sustainably cost-effective.</p>
                        <div className='  mt-4'>

                            <button className='bg-indigo-600 bg-opacity-30 p-4 font-bold rounded-lg w-[250px]  ' >View Docs</button>

                        </div>
                    </div>

                    <div className='pl-24 pr-24 pt-48 '>
                        <img src={logo} className=' opacity-60 ' />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 lg:mt-12  '>
                    <div className='pl-24 pr-24  text-white text-5xl mt-8  '>

                        <img src={logo22} className='h-72 w-72' />
                        <h1 className='font-semibold  text-green-500'> Vision</h1>
                        <p className='text-lg font-semibold mt-6'>A decentralised, sustainable, and connected world where no computing is wasted.</p>

                    </div>

                    <div className='pl-24 pr-24 '>
                        <img src={logo33} className=' opacity-90 ' />
                        <h1 className='text-green-500  text-6xl font-bold'>Mission</h1>
                        <p className='mt-6 font-semibold  text-white  w-96 text-lg '>Empower people and organisations to earn and save through cheaper, accessible, and sustainable computing by utilising spare capacity.</p>
                    </div>
                </div>

                <div className='mt-12'>
                    <div className='font-bold text-5xl font-sans grid justify-items-center w-auto text-green-500 '><h1 >Meet the Team</h1></div>

                    <Link to='/aboutdescription' onClick={scrollToTop}>
                        <div className=' grid grid-cols-1 lg:grid lg:grid-cols-3 justify-items-center items-center  mt-12'>
                            <div className='bg-gray-700 h-[450px] w-[250px] grid justify-items-center  rounded-lg lg:mt-[0px] hover:border-white hover:border-2  hover:scale-105 duration-500 mb-8 '>
                                <div className='  w-[250px] justify-items-center'>
                                    <img src={logo1} className='h-[320px] w-[245px] object-contain  ' />
                                    <div className=' w-[250px] grid justify-items-center'>
                                        <div className='h-20 w-20 rounded-full border-2 border-emerald-400 grid items-center -mt-12 ml-24 transform bg-slate-800 text-white font-bold text-4xl'>
                                            <h1 className='text-center h-auto w-auto'>
                                                in
                                            </h1>
                                        </div>
                                        <h1 className=' text-white font-bold text-xl' >M Hamza Sattar</h1>
                                        <h2 className='text-green-500 font-sans text-lg'>(Front End Developer)</h2>
                                    </div>

                                </div>
                            </div>
                            <div className='bg-gray-700 h-[450px] w-[250px] grid justify-items-center  rounded-lg lg:mt-[0px] hover:border-white hover:border-2  hover:scale-105 duration-500 mb-8 '>
                                <div className='  w-[250px] justify-items-center'>
                                    <img src={logo2} className='h-[320px] w-[245px] object-contain  ' />
                                    <div className=' w-[250px] grid justify-items-center'>
                                        <div className='h-20 w-20 rounded-full border-2 border-emerald-400 grid items-center -mt-12 ml-24 transform bg-slate-800 text-white font-bold text-4xl'>
                                            <h1 className='text-center h-auto w-auto'>
                                                in
                                            </h1>
                                        </div>
                                        <h1 className=' text-white font-bold text-xl'>Shaheryar</h1>
                                        <h2 className='text-green-500 font-sans text-lg' >(Back End Developer)</h2>

                                    </div>

                                </div>
                            </div>
                            <div className='bg-gray-700 h-[450px] w-[250px] grid justify-items-center  rounded-lg lg:mt-[0px] hover:border-white hover:border-2  hover:scale-105 duration-500 mb-8 '>
                                <div className='  w-[250px] justify-items-center'>
                                    <img src={logo3} className='h-[320px] w-[245px] object-contain ' />
                                    <div className=' w-[250px] grid justify-items-center'>
                                        <div className='h-20 w-20 rounded-full border-2 border-emerald-400 grid items-center -mt-12 ml-24 transform bg-slate-800 text-white font-bold text-4xl'>
                                            <h1 className='text-center h-auto w-auto'>
                                                in
                                            </h1>
                                        </div>
                                        <h1 className=' text-white font-bold text-xl' >Moiz Khan</h1>
                                        <h2 className='text-green-500 font-sans text-lg'>(Back End Developer)</h2>


                                    </div>


                                </div>

                            </div>

                            {/* 
                        <div className='bg-gray-700 hover:border-white hover:border-2 h-[740px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg hover:scale-105 duration-500 mb-8 lg:mt-[150px] '>
                            <div className=' h-80 w-80 rounded-full mt-4 grid justify-items-center  '>
                                <img src={logo3} className='h-96 w-72 rounded-full border-2 border-white  ' />
                                <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
                                <strong className=' text-2xl text-white  font-extrabold'>Moiz Khan</strong>

                            </div>


                        </div> */}


                        </div >
                    </Link>






                </div>



















            </div>
        </>
    )
}

export default HeroSection































































// import React from 'react'
// import logo2 from '../../Assets/sheri.png'
// import logo1 from '../../Assets/hamza.png'
// import logo3 from '../../Assets/moiz.png'
// const HeroSection = () => {
//     return (
//         <>
            // <div className=' grid grid-cols-1 lg:grid lg:grid-cols-3 justify-items-center  mt-6'>

            //     <div className='bg-gradient-to-r from-red-500 via-red-400 to-yellow-100 h-[600px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg lg:mt-[0px] hover:border-white  hover:scale-105 duration-500 mb-8 '>
            //         <div className=' h-72 w-72 rounded-full mt-4 grid justify-items-center '>
            //             <img src={logo1} className='h-96 w-64 rounded-full object-cover border-2 border-white' />
            //             <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
            //             <strong className=' text-2xl text-white  font-extrabold'>M. Hamza Sattar</strong>

            //         </div>
            //     </div>
            //     <div className='bg-gradient-to-r from-yellow-100 via-red-400 to-yellow-300 h-[680px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg lg:mt-[70px] hover:border-white transform hover:scale-105 duration-500 mb-8 mt '>
            //         <div className=' h-fit w-72 rounded-full     mt-4 grid justify-items-center '>
            //             <img src={logo2} className='h-96 w-64 rounded-full border-2 border-white' />
            //             <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
            //             <strong className=' text-2xl text-white  font-extrabold '>Shaheryar</strong>
            //         </div>


            //     </div>
            //     <div className='bg-gradient-to-r from-yellow-300   via-red-400 to-red-500 h-[740px] w-96 grid justify-items-center shadow-lg shadow-gray-900 rounded-lg  hover:border-white transform hover:scale-105 duration-500 mb-8 lg:mt-[150px] '>
            //         <div className=' h-80 w-80 rounded-full mt-4 grid justify-items-center  '>
            //             <img src={logo3} className='h-96 w-72 rounded-full border-2 border-white  '  />
            //             <div className=' border border-gray-300 h-1 w-64 bg-slate-300 rounded mt-2'></div>
            //             <strong className=' text-2xl text-white  font-extrabold'>Moiz Khan</strong>

            //         </div>


            //     </div>


            // </div >

//         </>
//     )
// }
// export default HeroSection;
