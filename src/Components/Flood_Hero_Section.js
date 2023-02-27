import React from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';

const Flood_Hero_Section = () => {
  const { fund , query ,setQuery } = useGlobalContext();

  return (
    <>
      <div className=' grid justify-items-center items-center'>
        <section className='h-[100%] w-[95%]   rounded lg:mt-2  '>
          <div className='grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 text-gray-800    gap-4'>
            {
              fund.map((floody) => {
                const { id, title, description, value, poster, names } = floody;

                return (
                  <>
                    {
                       names.toLowerCase().slice(0,2) == query.toLowerCase().slice(0,2) || title.toLowerCase().slice(0,2) == query.toLowerCase().slice(0,2)  ?

                        <Link to={query.value} className=" p-2  rounded-t-2xl   border  cursor-pointer h-[100%] w-[86%] bg-gradient-to-r from-green-500 to-green-300 via-green-200 hover:from-green-500 hover:to-green-700  rounded-2xl">
                          <section key={id} >
                            <img src={poster} className='w-auto  lg:w-auto rounded-t-xl hover:scale-105 hover:ease-in-out  hover:duration-500' />
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
        </section>
        



      </div>

    </>

  )
}

export default Flood_Hero_Section