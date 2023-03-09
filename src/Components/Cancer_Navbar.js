import React, { useState } from 'react'
import Button from '../Components/Button'
import logo from '../Assets/newLogo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
import Suggestion_Box from './Suggestion_Box'
let data = require("../MOCK_DATA.json")

const Cancer_Navbar = () => {

    const onChange = (event) => {
        setQuery_Cancer(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setQuery_Cancer(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };


    let Links = [
        {
            name: "How it works", link: "/"
        },
        {
            name: "Fund Now",
            link: "/",
            submenu: true,
            sublinks: [

                {
                    Head: "Equity Funding",
                    sublinks: [
                        { title: "Working", link: "/" },
                        { title: "Startup", link: "/" },


                    ]
                },
                {
                    Head: "Donation",
                    sublinks: [
                        { title: "Flood", link: "/floods" },
                        { title: "Cancer", link: "/cancer" },



                    ]
                },
            ]
        },
        {
            name: "Developers", link: "/aboutus",
        },

        {
            name: "Sign in", link: "/signin"
        }
    ];

    let [open, setOpen] = useState(false);
    const { query_cancer, setQuery_Cancer } = useGlobalContext();


    return (
        <>
            <div className=' shadow-md w-full top-0  bg-gray-800 left-0 border border-green-500  hover:shadow-md  hover:shadow-indigo-700 hover:border hover:border-indigo-700'>

                <div className=' w-full flex items-center justify-items-center lg:px-10  h-auto  md:justify-between   lg:w-screen lg:justify-between '>


                    <div className=' h-4 w-24 mb-10  cursor-pointer md:h-4 md:w-24 grid sm:justify-items-center sm:justify-center '>
                        <Link to='/' className='grid items-center justify-items-center' >
                            <span className=' text-3xl text-indigo-600 mr-1 mt-2 md:mr-0 '>
                                <img src={logo} alt="Logo" />
                            </span>
                        </Link>
                    </div>

                    <div className=' text-3xl absolute right-8 w-auto top-4 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>


                    {/* Search Section */}


                    <div className='justify-items-center grid w-auto md:w-auto h-auto'>
                        <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0 rounded-full border  hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                            <div className='m-2  grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                            <div className=''>
                                <input type="text" placeholder=" Search Here" className=' w-[180px] h-[28px]  rounded-lg  outline-none border-none lg:w-[200px] md:w-[130px] md:h-[28px] lg:rounded-xl'
                                    value={query_cancer}
                                    onChange={(e) => setQuery_Cancer(e.target.value)}
                                />
                            </div>
                        </div>

                        <Suggestion_Box />

                    </div>





                    <ul className={` md:flex md:justify-items-center md:items-center  absolute md:static bg-gray-800 h-auto w-[100%] left-0 md:w-[70%] md:h-auto md:pl-0  transition-all duration-700 ease-in ${open ? 'top-[75px] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        {
                            Links.map((item) => {
                                return (
                                    <>
                                        <li key={item.name} className="   justify-items-center items-center grid  text-lg md:my-0 my-4 md:w-[20%] group pl-7 md:p-0  ">
                                            <Link to={item.link} className='text-white hover:text-green-500  duration-500 md:text-base lg:p-2    lg:text-lg   '>{item.name}</Link>
                                            {
                                                item.submenu && <div>
                                                    <div className=''>
                                                        <div className=' absolute lg:top-[45px]  grid grid-cols-2 cursor-pointer rounded-lg  '>
                                                            {
                                                                item.sublinks.map((mysublink) => {
                                                                    return (
                                                                        <>

                                                                            <div className='hidden  group-hover:block hover:block
                                                            bg-slate-200  lg:mt-4 h-24 w-52  justify-center rounded -ml-1'>

                                                                                <h1 className=' font-bold ml-2'>{mysublink.Head}</h1>
                                                                                {
                                                                                    mysublink.sublinks.map((slink) => {
                                                                                        return (
                                                                                            <>
                                                                                                <Link to={slink.link}>
                                                                                                    <li className=' ml-6 lg:mt-1 hover:text-slate-400'>
                                                                                                        {slink.title}

                                                                                                    </li>
                                                                                                </Link>
                                                                                            </>

                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </>
                                                                    )


                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            }


                                        </li>

                                    </>
                                )
                            })
                        }
                        <Button >
                            Connect Wallet
                        </Button>

                    </ul>


                </div>


            </div>



        </>


    )
}

export default Cancer_Navbar