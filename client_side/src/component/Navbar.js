import React, { useState } from 'react'
// import Button from './button';
import { FaUserCircle } from "react-icons/fa";
import { MdReorder,MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const CommonNavbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Create Work", link: "/create" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full fixed top-0 bg-indigo-600  pb-0 left-0'>
            <div className='md:flex  rounded-xl h-[70px] items-center justify-between  bg-white  md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-4xl text-indigo-600 mr-4 '>
                        <FaUserCircle />
                    </span>
                    <NavLink to='/dashboard' className='flex  flex-col' >
                        <div className=' text-indigo-600'> Dashboard</div>
                        <div className='text-xl   text-indigo-700 hover:text-indigo-400 border-b-4 w-auto border-b-indigo-600 rounded-lg'> User</div>
                    </NavLink>  
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <MdClose/> : <MdReorder/>}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' top-20 rounded-xl right-8' : 'top-[-490px]'}`}>
                    { 
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <NavLink to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</NavLink>
                            </li>
                        ))
                    }
                    <NavLink to='/signup'>
                    <button 
                        className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
                        duration-500'>
                         Sign Up
                    </button>
                    </NavLink>
                    <NavLink to='/signin'>
                    <button 
                        className='bg-indigo-200 font-semibold  text-black hover:text-white font-[Poppins] py-2 px-6 rounded mr-2 md:ml-8 hover:bg-indigo-600 
                        duration-500'>
                         Sign In
                    </button>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default CommonNavbar