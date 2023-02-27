import React from 'react'
import { useGlobalContext } from './Context'
import earth from '../Assets/earth.png'
import erth from '../Assets/erth.png'
import eth from '../Assets/eth.png'

const Stats = () => {


    const SlideLeft = () => {
        let sliderLeft = document.getElementById('crypto');
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 350;

    }

    const SlideRight = () => {
        let sliderRight = document.getElementById('crypto');
        sliderRight.scrollLeft = sliderRight.scrollLeft + 350;

    }

    const { stat } = useGlobalContext();
    return (
        <>
            <div className='flex items-center pl-2 pr-2 w-[100%] '>
                <div className='grid items-center justify-items-center text-4xl opacity-50 hover:opacity-100 text-white cursor-pointer  '><ion-icon name="caret-back-outline" onClick={SlideLeft}></ion-icon></div>

                <div className='flex relative items-center gap-6 p-4  w-full h-full overflow-x-scroll scroll ease-in-out duration-1000  scroll-smooth scrollbar-hide' id='crypto'>
                    {
                        stat.map((item) => {

                            const { title, logo, price, percentage } = item;
                            return (
                                <>
                                    <a href="#" target="_blank">
                                        <div className='bg-gray-800 ml-4  h-40 w-72 p-4 rounded-2xl  items-center duration-700 cursor-pointer  hover:scale-105 mt-4 '>

                                            <div className='grid grid-cols-2 justify-items-center items-center lg:grid-cols-2'>
                                                <p className='text-indigo-700'>{title}</p>
                                                <img src={logo} className='ml-2 h-24 w-24 rounded-full' />
                                            </div>
                                            <div className='grid grid-cols-2 items-center justify-items-center mt-2 lg:grid-cols-2'>
                                                <p className='text-white '>{price}</p>
                                                <p className='text-white'>{percentage}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            )

                        })
                    }
                </div>
                <div className='grid items-center justify-items-center text-4xl opacity-50 hover:opacity-100 text-white cursor-pointer'><ion-icon name="caret-forward-outline" onClick={SlideRight}></ion-icon></div>
            </div>

            <div className='flex'> 

                {/* <img src={earth} className='h-[500px] w-[500px]'/>
                
                <img src={erth}  className='h-[500px] w-[500px]'/>
                */}

            </div>
        </>
    )
}

export default Stats
