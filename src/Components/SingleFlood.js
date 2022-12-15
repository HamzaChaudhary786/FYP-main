import React from 'react'
import { useParams } from 'react-router-dom'

const SingleFlood = () => {
    const {id}=useParams();
  return ( 
    <>
    <h1>This is SingleFlood Id {id}</h1>
    </>
  )
}

export default SingleFlood