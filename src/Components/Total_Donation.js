import React from 'react'
import { useGlobalContext } from './Context'

const Total_Donation = () => {
    const { money } = useGlobalContext();

    return (
        <>
            <div className='text-center font-bold grid justify-items-center   '>
                <div className=' grid-cols-1   h-96   text-center grid justify-center justify-items-center lg:mr-4 lg:ml-4  lg:h-36   lg:grid-cols-3 w-[95%] lg:gap-2  '>
                    {
                        money.map((item) => {
                            const { dollar, project } = item;
                            return (
                                <>
                                    <section className=' text-white bg-gradient-to-r from-green-500 to-green-300 w-[100%]  lg:h-32 lg:w-[310px] mt-2  grid items-center  rounded-xl  ' >
                                        <div className=' font-bold text-4xl'>{dollar} <br></br>
                                            <span className=' font-normal  text-sm'>{project}</span></div>
                                    </section>
                                </>
                            )
                        })
                    }

                </div>


            </div>

        </>
    )
}

export default Total_Donation