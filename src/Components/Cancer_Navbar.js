import React, { useState } from 'react'
import Button from '../Components/Button'
import logo from '../Assets/newLogo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
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
            <div className=' shadow-md w-full top-0 left-0 border border-green-500 hover:shadow-md  hover:shadow-indigo-700 hover:border hover:border-indigo-700'>


                <div className=' w-full flex items-center justify-items-center p-5 py-2 lg:px-10 h-auto md:p-2 md:justify-between lg:w-screen lg:justify-between'>
                    <div className=' h-4 w-24 md:w-24 mb-10 cursor-pointer'>
                        <Link to='/'>
                            <span className=' text-3xl text-indigo-600 mr-1 mt-2'>
                                <img src={logo} alt="Logo" />
                            </span>
                        </Link>
                    </div>

                    <div className=' text-3xl absolute right-8 top-4 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>


                    {/* Search Section */}




                    <div className=' grid  justify-items-center '>
                        <div className='  ml-6  lg:mr-0 md:ml-2 lg:mt-0 rounded-full border  hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                            <div className='m-2  grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                            <div className=''>
                                <input type="text" placeholder=" Search Here" className=' w-[180px] h-[28px]  rounded-lg  outline-none border-none lg:w-[200px] md:w-[130px] md:h-[28px] lg:rounded-xl'
                                    value={query_cancer}
                                    onChange={(e) => setQuery_Cancer(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="dropdown fixed bg-white mt-14 px-2  w-72 cursor-pointer  ">
                            {data
                                .filter((item) => {
                                    const searchTerm = query_cancer.toLowerCase();
                                    const first_name = item.first_name.toLowerCase();

                                    return (
                                        searchTerm &&
                                        first_name.startsWith(searchTerm) &&
                                        first_name !== searchTerm
                                    );
                                })
                                .slice(0, 10)
                                .map((item) => (
                                    <>
                                        <div
                                            onClick={() => onSearch(item.first_name)}
                                            className="dropdown-row hover:text-indigo-700"
                                            key={item.first_name}

                                        >
                                            {item.first_name}
                                        </div>
                                    </>
                                ))}
                        </div>

                    </div>




                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 h-80 w-full left-0 md:w-auto md:h-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-[75px] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        {
                            Links.map((item) => {
                                return (
                                    <>
                                        <li key={item.name} className=" md:ml-8  text-xl md:my-0 my-4 w-fit group">
                                            <a href={item.link} className='text-white hover:text-green-500  duration-500 '>{item.name}</a>
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

export default Cancer_Navbar