import React from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';

const Cancer_Hero_Section = () => {
    const { fund, query_cancer } = useGlobalContext();

    return (
        <>
            <div className=''>
                <section className='h-fit w-[450px] text-green-500 ml-4 rounded lg:mt-0 lg:w-[1100px] '>
                    <div className='lg:grid lg:grid-cols-3 text-gray-800 lg:justify-items-start lg:gap-x-14 lg:mt-4 mb-4 '>
                        {
                            fund.map((floody) => {
                                const { id, title, description, value, poster, names } = floody;

                                return (
                                    <>
                                        {
                                            names.toLowerCase().slice(0,2) == query_cancer.toLowerCase().slice(0,2) || title.toLowerCase().slice(0,2) == query_cancer.toLowerCase().slice(0,2)  ?

                                                <Link>
                                                    <section key={id} className="mt-2 p-2 lg:mb-0 rounded-t-2xl  mb-2 border  cursor-pointer lg:h-[470px] lg:w-[360px] lg:ml-24 bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-green-500 hover:to-green-700  rounded-2xl">
                                                        <img src={poster} className='h-[250px] ml-1 lg:ml-0 lg:w-auto rounded-t-xl hover:scale-105 hover:ease-in-out  hover:duration-500' />
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
                                                console.log(names )
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </section>




            </div>

        </>

    )
}

export default Cancer_Hero_Section