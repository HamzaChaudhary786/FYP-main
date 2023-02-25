import React from 'react'
import  JSONDATA  from './search_data.json'

const Recomanded = () => {
    return (
        <>
            <div className='lg:relative mt-10 bg-slate-300'>
                {
                    JSONDATA.map((item) => {
                        const { first_name, id } = item;
                        return (
                            <>
                                <div key={id}>
                                    {first_name}

                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Recomanded