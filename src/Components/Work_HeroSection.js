import React from 'react'
import card from "../Assets/card.png"
const Work_HeroSection = () => {
    return (
        <>
            <div className=' justify-items-center items-center grid w-[100%]'>

                <div className=' w-[96%] justify-items-center items-center grid '>
                    <img src={card} />

                    <h1 className='  text-2xl font-extrabold italic'>DEVELOMENT</h1>
                    


                </div>
                <div className=' w-[96%] bg-gray-400 text-white'>
                        <h1>React Js Development</h1>
                        <p></p>
                        <h1>Tailwind CSS styling</h1>
                        <p></p>
                        <h1>Haedhat And Solidity Language</h1>
                        <p></p>
                        <h1>Designing</h1>
                        <p></p>
                        <h1>Testing Process</h1>
                        <p></p>
                        <h1>BlockChain (Web 3)</h1>



                    </div>
            </div>
        </>
    )
}

export default Work_HeroSection