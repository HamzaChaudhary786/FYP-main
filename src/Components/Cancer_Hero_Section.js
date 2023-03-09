import React from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';

const Cancer_Hero_Section = () => {
    const { fund, query_cancer, cancer } = useGlobalContext();

    return (
        <>
            <section className='w-[100%] h-auto  mt-6  rounded lg:mt-0 grid justify-items-center items-center  '>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 w-[95%] text-gray-800 lg:justify-items-start m-4 gap-4'>
                    {
                        fund.map((floody) => {
                            const { id, title, description, value, poster, names } = floody;

                            return (
                                <>
                                    {
                                        names.toLowerCase() == query_cancer.toLowerCase() || title.toLowerCase() == query_cancer.toLowerCase() ?

                                            <Link className=' grid justify-items-center '>
                                                <section key={id} className="mt-4   rounded-t-2xl p-1  border  cursor-pointer bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-green-500 hover:to-green-700  rounded-2xl w-[95%] h-[100%] grid justify-items-center">
                                                    <img src={poster} className='h-[250px] w-[96%] ml-1 lg:ml-0 lg:w-auto rounded-t-xl hover:scale-105 hover:ease-in-out  hover:duration-500' />
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

                <div className=' w-[98%] lg:grid lg:grid-cols-3 text-gray-800 lg:justify-items-start '>
                    {
                        cancer.map((Perm) => {
                            const { id, title, description, value, poster, names } = Perm;

                            return (
                                <>


                                    <Link className=' grid justify-items-center m-4'>
                                        <section key={id} className="p-1 rounded-t-2xl  border  cursor-pointer   bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-green-500 hover:to-green-700  rounded-2xl h-[100%] w-[95%]">
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


                                </>
                            )
                        })

                    }
                </div>
            </section>
        </>
    )
}

export default Cancer_Hero_Section