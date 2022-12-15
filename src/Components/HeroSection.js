import React, { useState } from 'react'
import image from '../Assets/frontimage.PNG'
import { useGlobalContext } from './Context'
import charity from '../Assets/charity.png'
import { Link } from 'react-router-dom'

// const counter = [


//     {
//         "id": "1",
//         "title": "Project Found",
//         "value": "$5000",
//     },
//     {
//         "id": "2",
//         "title": "Project Dollar",
//         "value": "$56,000",
//     },
//     {
//         "id": "3",
//         "title": "Pledgar",
//         "value": "$5000",
//     }
// ]



const HeroSection = () => {
    const { fund, money ,query } = useGlobalContext();
    console.log(fund)


    return (
        <>
            <div className='bg-gray-900 pb-8'>
                <div className='w-auto lg:h-screen  lg:w-[1340px]  text-white'>
                    <div className=' grid grid-cols-1 w- h-fit  lg:grid lg:grid-cols-2 lg:h-[450px] '>
                        <div className=' grid justify-items-center items-center '>
                            <section className='p-12 pb-0 lg:p-12 grid  items-center   '>
                                <h1 className=' text-4xl font-bold lg:font-bold lg:text-5xl h-auto lg:w-48'>Need To Help,</h1>
                                <h1 className=' text-4xl font-bold mt-4 lg:font-bold lg:text-5xl lg:h-auto lg:mt-4  ' ><span className='text-green-500'>The  </span><span className=' text-green-500'>Needy</span></h1>
                                <strong className=' mt-4 lg:mt-4 '> We Need Your Help To Save People Of Sindh And Near By Area's That Have Been Affected By The Devastating Effects Of Climate Change. Donate Today. Each Penny Account</strong>

                            </section>
                        </div>
                        <div className=' grid justify-items-center items-start'>
                            <img src={charity} className=" h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] " />
                        </div>
                        <div className='lg:w-[1280px] grid justify-items-center'>
                            <button className=' p-2 h-12 w-44  text-center border-emerald-500 lg:h-16 lg:w-64 bg-red-500 lg:p-3 rounded-full shadow-gray-500 lg:shadow-md text-white lg:text-3xl lg:font-semibold bg-gradient-to-r from-green-500 to-green-300  hover:from-white hover:to-neutral-100
                            hover:via-neutral-300 duration-500  hover:text-gray-800'>
                                Donate
                            </button>
                            {/* <div className=' border w-44 mb-4 lg:mb-0 border-green-500 lg:w-80 h-0 items-center mt-2 lg:mt-6 '></div> */}
                        </div>


                    </div>

                </div>
                {/* <div className=' border border-green-500 mt-2 lg:w-[1280px] lg:ml-8' ></div> */}


                {/* This is our Counter 3 div Section */}


                <div className='  mt-2  text-center font-bold grid justify-items-center items-center   '>
                    <div className=' grid-cols-1   h-96  w-[450px]  text-center grid justify-items-center lg:mr-0  lg:h-36  lg:mt-4 lg:grid-cols-3 lg:w-[1285px] '>
                        {
                            money.map((item) => {
                                const { dollar, project } = item;
                                return (
                                    <>
                                        <section className=' text-white bg-gradient-to-r from-green-500 to-green-300 w-[450px]  lg:h-32 lg:w-96 mt-1  grid items-center  rounded-xl  ' >
                                            <div className=' font-bold text-4xl'>{dollar} <br></br>
                                                <span className=' font-normal  text-sm'>{project}</span></div>
                                        </section>
                                    </>
                                )
                            })
                        }

                    </div>


                </div>
                {/* <div className=' border border-green-500 mt-2 lg:w-[1280px] lg:ml-8' ></div> */}




                <div className=' grid grid-cols-1 mt-4   '>
                    {/* <div className=' ml-4 lg:grid lg:justify-items-end lg:mr-4 '>
                        <img src={image} className='h-[180px] w-[450px] rounded lg:h-[273px] lg:w-[550px] lg:rounded ' />
                        <button className=' h-16 w-[450px] rounded mt-2 mb-2 bg-indigo-800 hover:bg-indigo-500 text-white  lg:h-[98px] lg:w-[550px] lg:mb-0 lg:text-4xl lg:font-serif font-bold '>GoFundMe </button>

                    </div>  */}



                    <section className='bg-gradient-to-r from-green-500 to-green-300 via-green-200 h-[350px] w-[450px] ml-4 rounded lg:h-64 lg:w-[1260px] lg:ml-8 '>

                        <div className='h-[250px]  lg:mr-10 lg:grid lg:grid-cols-3 lg:h-48 lg:w-auto   lg:justify-items-center  lg:items-center '>
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



                <section className='h-fit w-[450px] text-green-500 ml-4 rounded lg:mt-0 lg:w-[1100px] '>


                    <div className=''>
                        <div className=' font-bold mt-2 mb-2 lg:ml-24 lg:mt-4' >Happening near you</div>
                        <span className='  font-bold text-4xl mt-2 mb-2 w-52 lg:w-[300px] lg:ml-24 lg:mt-4'>Fundraiser In Your Community</span>
                        <div className='lg:grid lg:grid-cols-3 text-gray-800 lg:justify-items-start lg:gap-x-14 lg:mt-4 mb-4 '>
                            {

                                fund.map((funde) => {
                                    const { id, title, description, value, poster, link, names } = funde;
                                    return (
                                        <>
                                            {
                                                names[2] == query[2] ?

                                                    <Link to={link}>
                                                        <section key={id} className="mt-2 p-2 lg:mb-0 rounded-t-2xl  mb-2 border  cursor-pointer lg:h-[470px] lg:w-[360px] lg:ml-24 bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-green-500 hover:to-green-700  rounded-2xl">
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