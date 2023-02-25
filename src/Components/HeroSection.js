import React, { useState } from 'react'
// import image from '../Assets/frontimage.PNG'
import { useGlobalContext } from './Context'
import charity from '../Assets/charity.png'
import { Link } from 'react-router-dom'
import Total_Donation from './Total_Donation'



const HeroSection = () => {
    const { fund, money, query } = useGlobalContext();
    console.log(fund)


    return (
        <>
            <div className=' h-auto w-auto  '>
                <div className='imageSlider w-screen  h-auto lg:h-screen  lg:w-full  text-white  '>
                    <div className=' grid grid-cols-1  h-fit md:h-fit  md:grid-cols-2  lg:grid lg:grid-cols-2 lg:h-[450px] '>
                        <div className=' grid justify-items-center '>
                            <section className='  p-4 md:p-12 lg:p-12  grid  items-center h-fit pb-0  '>
                                <h1 className=' text-4xl font-bold lg:font-bold lg:text-5xl h-auto lg:w-48'>Need To Help,</h1>
                                <h1 className=' text-4xl font-bold mt-4 lg:font-bold lg:text-5xl lg:h-auto lg:mt-4  ' ><span className='text-green-500'>The Needy</span></h1>
                                <strong className=' mt-4 lg:mt-4 '> We Need Your Help To Save People Of Sindh And Near By Area's That Have Been Affected By The Devastating Effects Of 
                                Climate Change. Donate Today. Each Penny Account</strong>

                            </section>
                        </div>
                        <div className=' grid justify-items-center items-start'>
                            <img src={charity} className=" h-[330px] w-[330px] lg:h-[450px] lg:w-[450px] " />
                        </div>

                        <div className='w-screen grid justify-items-center -mt-2 md:-mt-0 lg:-mt-0 '>
                            <button className=' p-2 h-12 w-44  text-center border-emerald-500 lg:h-16 lg:w-64 bg-red-500 lg:p-3 rounded-full shadow-gray-500 lg:shadow-md text-white lg:text-3xl lg:font-semibold bg-gradient-to-r from-green-500 to-green-300  hover:from-white hover:to-neutral-100
                            hover:via-neutral-300 duration-500  hover:text-gray-800'>
                                Donate
                            </button>

                        </div>


                    </div>
                </div>
                <Total_Donation/>


               

                



                <div className=' grid grid-cols-1 mt-4 justify-items-center'>
                
                    <section className=' h-80 w-[450px] bg-gradient-to-r from-green-500 to-green-300 via-green-200   rounded-xl md:w-[600px] lg:h-64 lg:w-[95%]  '>

                        <div className=' h-[250px] grid  lg:grid lg:grid-cols-3 lg:h-48 lg:w-auto   lg:justify-items-center '>

                            <div className=''>
                                <div className='flex mt-2 ml-2 lg:ml-10 lg:text-xl '>
                                    <div className=' h-7 w-7 rounded-full border border-black text-center lg:mt-1'>1</div>
                                    <div className='ml-6 font-bold'>Choose a non-profits</div>
                                </div>
                                <p className='ml-14 lg:ml-[90px]'>Choose from our list of registered 501(c)(3) charities.</p>
                            </div>


                            <div className=''>
                                <div className=' flex mt-2 ml-2 lg:ml-10 lg:text-xl'>
                                    <div className=' h-7 w-7 rounded-full border border-black text-center lg:mt-1'>2</div>
                                    <div className='ml-6 font-bold'>Launch your fundraiser</div>
                                </div>
                                <p className='ml-14 lg:ml-[90px]'>Easily share your fundraiser with friends and family to raise donations.</p>
                            </div>


                            <div className=''>
                                <div className=' flex mt-2 ml-2 lg:ml-10 lg:text-xl'>
                                    <div className=' h-7 w-7 rounded-full border border-black text-center lg:mt-1'>3</div>
                                    <div className='ml-6 font-bold'>Make a difference</div>
                                </div>
                                <p className='ml-14 lg:ml-[90px]'>Funds are safely and automatically delivered to the nonprofit.</p>
                            </div>

                        </div>
                        <div className='grid justify-items-center mt-2'>
                            <button className=' border  rounded-lg p-2 text-black w-96 bg-white hover:bg-gray-900 hover:text-white'>Start a nonprofit fundraiser </button>
                        </div>

                    </section>

                </div>



                <section className=' w-[100%]  lg:h-fit lg:w-fit '>


                    <div className='text-green-500   lg:w-screen grid justify-items-center'>
                        <div className=' font-bold mt-2 mb-2   lg:mt-4' >Happening near you</div>
                        <span className='  font-bold text-4xl mt-2 mb-2 w-52 lg:w-[300px]  lg:mt-4'>Fundraiser In Your Community</span>
                        <div className=' h-fit w-[450px] text-gray-800 md:w-[95%]  lg:h-fit   md:gap-4   md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:w-[90%] lg:mt-4 mb-4 lg:justify-items-center '>
                            {

                                fund.map((funde) => {
                                    const { id, title, description, value, poster, link, names } = funde;
                                    return (
                                        <>
                                            {
                                                names.toLowerCase() == query.toLowerCase() || title.toLowerCase() == query.toLowerCase() ?

                                                    <Link to={link}>
                                                        <section key={id} className="mt-6 p-2 lg:mb-0 rounded-t-2xl  mb-2 border  cursor-pointer md:w-[360px] lg:h-[470px] lg:w-[340px]  bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-green-500 hover:to-green-700  rounded-2xl">
                                                            <img src={poster} className='w-[424px] ml-1 lg:ml-0 lg:w-auto rounded-t-xl hover:scale-105 hover:ease-in-out  hover:duration-500' />
                                                            <h1 className='m-2 font-bold lg:mt-6'>{title} </h1>
                                                            <p className='m-2 mt-4 font-normal  '>{description} </p>

                                                            <div className='w-[100%] border-2 border-black rounded-r-lg'>
                                                                <div className={`bg-indigo-400 h-4 text-center rounded-r-lg text-xs`}
                                                                    style={{
                                                                        opacity: 1,
                                                                        width: `${value}%`
                                                                    }}
                                                                >
                                                                    {value}%

                                                                </div>
                                                            </div>
                                                        </section>
                                                    </Link>

                                                    :
                                                    console.log(names)
                                            }
                                        </>
                                    )

                                })

                            }
                        </div>

                    </div>
                </section>




            </div>
        </>
    )
}

export default HeroSection