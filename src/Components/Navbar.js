import React, { useState } from 'react'
import Button from '../Components/Button'
import logo from '../Assets/newLogo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
const Navbar = () => {
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
        },

    ];
    let [open, setOpen] = useState(false);
    const { query, setQuery } = useGlobalContext();

    // const [dropdown, setDropDown] = useState(false);
    return (
        <>
            <div className=' shadow-md w-full top-0  bg-gray-800 left-0 border border-green-500  hover:shadow-md  hover:shadow-indigo-700 hover:border hover:border-indigo-700'>

                <div className=' w-full flex items-center justify-items-center  p-5 py-2 lg:px-10  h-auto   md:p-2    md:justify-between   lg:w-screen lg:justify-between '>


                    <div className=' h-4 w-24 mb-10 cursor-pointer md:h-4 md:w-16 grid sm:items-center sm:justify-center '>
                        <Link to='/'>
                            <span className=' text-3xl text-indigo-600 mr-1 mt-2 md:mr-0'>
                                <img src={logo} className="md:mt-3 " alt="Logo" />
                            </span>
                        </Link>
                    </div>

                    <div className=' text-3xl absolute right-8 top-4 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>


                    {/* Search Section */}



                    <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0 rounded-full border  hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                        <div className='m-2  grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                        <div>
                            <input type="text" placeholder=" Search Here" className=' w-[180px] h-[28px]  rounded-lg  outline-none border-none lg:w-[200px] md:w-[130px] md:h-[28px] lg:rounded-xl'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)} />
                        </div>



                    </div>

                    <ul className={`md:flex md:items-center   md:pb-0 pb-12 absolute md:static bg-gray-800 h-80 w-full left-0 md:w-auto md:h-auto md:pl-0  transition-all duration-700 ease-in ${open ? 'top-[60px] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        {
                            Links.map((item) => {
                                return (
                                    <>
                                        <li key={item.name} className="  text-center text-lg md:my-0 my-4 w-fit group pl-7 md:pl-2 md:ml-2   ">
                                            <Link to={item.link} className='text-white hover:text-green-500  duration-500 md:text-lg   lg:text-lg lg:p-4  '>{item.name}</Link>
                                            {
                                                item.submenu && <div>
                                                    <div className=''>
                                                        <div className=' absolute lg:top-[45px]  grid grid-cols-2 cursor-pointer rounded-lg  '>
                                                            {
                                                                item.sublinks.map((mysublink) => {
                                                                    return (
                                                                        <>

                                                                            <div className='hidden  group-hover:block hover:block
                                                                            bg-slate-200  lg:mt-8 h-24 w-52  justify-center rounded -ml-1'>

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
                        <Button>
                            Connect Wallet
                        </Button>
                    </ul>

                </div>

            </div>



        </>
    )
}

export default Navbar