import React from 'react'

const Button = (props  ) => {
  return (
    <>
    <button className=' text-gray-800  hover:text-white py-2 px-6 rounded md:ml-8 bg-gradient-to-r from-green-500 to-green-300 hover:from-indigo-600 hover:to-indigo-400 duration-500 '>
        {props.children}
         
    </button>

    </>
  )
}

export default Button