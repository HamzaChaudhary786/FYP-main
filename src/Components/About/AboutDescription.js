import React from 'react'
import hand from '../../Assets/hands.png'
import logo2 from '../../Assets/sheri.png'
import logo1 from '../../Assets/hamza.png'
import logo3 from '../../Assets/moiz.png'
function AboutDescription() {
    return (
        <>
            <div className='bg-slate-900 h-auto w-auto p-8 lg:p-0  '>
                <div className='grid grid-cols-1  lg:grid lg:grid-cols-2 justify-items-center items-center'>
                    <div className=''>
                        <h1 className=' font-bold text-5xl text-white'>Meet the team</h1>
                        <p className='h-42 w-96 text-green-200 text-lg mt-4'>Fund Way leadership team brings decades-long multidisciplinary experience. Read the team’s bios below and connect with them on Github!</p>
                    </div>
                    <div >
                        <img src={hand} className='h-[400px] w-[600px]' />
                    </div>
                </div>


                <div className='grid justify-center  items-center'>
                    <div className=' grid grid-cols-1 lg:grid lg:grid-cols-2 h-auto mt-4' >
                        <div className='lg:grid lg:justify-center'>
                            <img src={logo1} className='h-96 w-72 bg-slate-400 rounded-lg' />
                        </div>

                        <div className='grid justify-center h-auto w-[400px] lg:h-[120px] lg:w-auto  lg:grid lg:justify-start mt-4 pr-2'>
                            <h1 className=' text-2xl font-bold font-serif text-white'>M. Hamza Sattar</h1>
                            <h2 className='text-green-500 font-sans text-lg mt-2'>(Front End Developer)</h2>
                            <div className='h-16 w-16 rounded-full border-2 mt-2 border-emerald-400 grid items-center transform bg-slate-800 text-white font-bold text-lg'>
                                <h1 className='text-center h-auto w-auto'>
                                    Github
                                </h1>
                            </div>

                            <p className='text-green-200 mt-4 text-lg'>Matt is a tech entrepreneur, Building and founding C4L in 2000 which was one of the fastest growing ISP’s in the UK & winner of many fast growth awards including Times Tech Track 100, Deloitte UK Top 50, Deloitte EMEA Fast 500 & many more. C4L provided approx 1% of the UK’s internet infrastructure and was one of the largest private networks in the UK including their own data centre & scaled to over 1% of the UK’s internet traversing it</p>
                        </div>

                    </div>


                    <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 lg:h-auto  mt-6'>
                        <div className=' lg:grid lg:justify-center'>
                            <img src={logo2} className='h-96 w-72 bg-slate-400 rounded-lg' />
                        </div>
                        <div className='lg:h-[120px] lg:w-auto grid justify-start mt-4 pr-2'>
                            <h1 className=' text-2xl font-bold font-serif text-white'>Shaheryar</h1>
                            <h2 className='text-green-500 font-sans text-lg mt-2'>(Back End Developer)</h2>
                            <div className='h-16 w-16 rounded-full border-2 mt-2 border-emerald-400 grid items-center transform bg-slate-800 text-white font-bold text-lg'>
                                <h1 className='text-center h-auto w-auto'>
                                    Github
                                </h1>
                            </div>
                            <p className='text-green-200 mt-4 text-lg'>Matt is a tech entrepreneur, Building and founding C4L in 2000 which was one of the fastest growing ISP’s in the UK & winner of many fast growth awards including Times Tech Track 100, Deloitte UK Top 50, Deloitte EMEA Fast 500 & many more. C4L provided approx 1% of the UK’s internet infrastructure and was one of the largest private networks in the UK including their own data centre & scaled to over 1% of the UK’s internet traversing it</p>
                        </div>

                    </div>


                    <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 lg:h-auto  mt-6'>
                        <div className='lg:grid lg:justify-center'>
                            <img src={logo3} className='h-96 w-72 bg-slate-400 rounded-lg' />
                        </div>
                        <div className='lg:h-[120px] pr-2 grid justify-start mt-4'>
                            <h1 className=' text-2xl font-bold font-serif text-white'>Moiz Khan</h1>
                            <h2 className='text-green-500 font-sans text-lg mt-2'>(Back End Developer)</h2>

                            <div className='h-16 w-16 rounded-full border-2 mt-2 border-emerald-400 grid items-center transform bg-slate-800 text-white font-bold text-lg'>
                                <h1 className='text-center h-auto w-auto'>
                                    Github
                                </h1>
                            </div>
                            <p className='text-green-200 mt-4 text-lg'>Matt is a tech entrepreneur, Building and founding C4L in 2000 which was one of the fastest growing ISP’s in the UK & winner of many fast growth awards including Times Tech Track 100, Deloitte UK Top 50, Deloitte EMEA Fast 500 & many more. C4L provided approx 1% of the UK’s internet infrastructure and was one of the largest private networks in the UK including their own data centre & scaled to over 1% of the UK’s internet traversing it</p>
                        </div>

                    </div>





                </div>




            </div>
        </>
    )
}

export default AboutDescription