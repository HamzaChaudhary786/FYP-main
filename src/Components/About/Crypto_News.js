import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context'



const Crypto_News = () => {
    const { crypto } = useGlobalContext();

    const SlideLeft = () => {
        let sliderLeft = document.getElementById('slide');
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 400;

    }

    const SlideRight = () => {
        let sliderRight = document.getElementById('slide');
        sliderRight.scrollLeft = sliderRight.scrollLeft + 400;

    }

    return (
        <>
            <div className='flex items-center  w-[100%] justify-items-center pl-2 pr-2'>
                <div className='grid items-center justify-items-center text-4xl opacity-50 hover:opacity-100 text-white cursor-pointer  '><ion-icon name="caret-back-outline" onClick={SlideLeft}></ion-icon></div>

                <div className='flex relative items-center gap-6  w-full h-full overflow-x-scroll scroll ease-in-out duration-1000  scroll-smooth scrollbar-hide' id='slide'>
                    {
                        crypto.map((crypto) => {

                            const { title, day, poster, description, link } = crypto;
                            return (
                                <>
                                    <a href={link} target="_blank">
                                        <div className='bg-gray-800 flex h-40 w-96 rounded-xl  items-center duration-700 cursor-pointer  hover:scale-105 mt-4 '>
                                            <div className='flex p-6'>
                                                <div>
                                                    <div className='flex'>
                                                        <p className='text-indigo-700'>{title}</p>
                                                        <p className='ml-2'>{day}</p>
                                                    </div>
                                                    <p className='text-white mt-4'>{description}</p>
                                                </div>
                                                <div>

                                                    <img src={poster} className="h-24 w-64 rounded-lg" />
                                                </div>
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
        </>
    )
}

export default Crypto_News