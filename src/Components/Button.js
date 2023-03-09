import { useState } from 'react'
import { ethers } from 'ethers'

const Button = (props) => {

  const [data, setdata] = useState({
    address: '',    // Stores address
    Balance: null  // Stores balance
  })


  const MetaMask = () => {


    if (window.ethereum) {

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(res => {
          // Return the address of the wallet
          console.log(res)
        })
      document.getElementById('meta').innerHTML = "Disconnect"

      // if()
      // document.getElementById('meta').innerHTML = "Connect"




    } else {
      alert("install metamask extension!!")
    }
  }




  return (
    <>
      <button className=' text-gray-800  hover:text-white text-base w-[15%] py-1 px-6 md:py-0 md:px-1 ml-6 md:ml-0 h-12 rounded bg-gradient-to-r from-green-500 to-green-300 hover:from-indigo-600 hover:to-indigo-400 duration-500 ' onClick={MetaMask} id="meta">
        {props.children}


      </button>

    </>
  )
}

export default Button