'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiHome } from 'react-icons/ci';
import { ImStatsDots } from 'react-icons/im';
import { IoIosAdd } from 'react-icons/io';
import { MdOutlineAccessTime } from 'react-icons/md';

const Navbar = () => {
    const pathname = usePathname()
    const navLinks = (
        <>
            <li>
                <Link href="/" className={`flex items-center gap-2 py-2 ${pathname === '/' ? 'bg-[#244D3F] text-white' : 'text-gray-500'}`}>
                    <CiHome className="text-xl" />
                    <span className=''>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/Timeline" className={`flex items-center gap-2 py-2 ${pathname === '/Timeline' ? 'bg-[#244D3F] text-white' : 'text-gray-500'}`}>
                    <MdOutlineAccessTime className="text-xl" />
                    <span >Timeline</span>
                </Link>
            </li>
            <li>
                <Link href="/Card" className={`flex items-center gap-2 py-2 ${pathname === '/Card' ? 'bg-[#244D3F] text-white' : 'text-gray-500'}`}>
                    <ImStatsDots className="text-lg" />
                    <span>Card</span>
                </Link>
            </li>
            <li>
                <Link href="/stats" className={`flex items-center gap-2 py-2 ${pathname === '/stats' ? 'bg-[#244D3F] text-white' : 'text-gray-500'}`}>
                    <ImStatsDots className="text-lg" />
                    <span>Stats</span>
                </Link>
            </li>
        </>
    );

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm px-4">

                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost text-xl font-bold p-0">
                        KeenKeeper
                    </Link>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 gap-4 font-medium hidden lg:flex">
                        {navLinks}
                    </ul>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-base-200">
                            {navLinks}
                        </ul>
                    </div>
                </div>

            </div>
            {/* <div className='text-center mt-20 space-y-6'>
                <h1 className='text-5xl'>Friends to keep close in your life</h1>
                <p className='text-gray-500'>Your personal shelf of meaningful connections. <br />Browse, tend, and nurture the
                    relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white'>
                    <IoIosAdd size={30} />
                    Add a Friend</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
                <div className="card shadow ">
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-semibold">10</h2>
                        <p className='text-lg text-gray-400'>Total Friends</p>
                    </div>
                </div>
                <div className="card shadow ">
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-semibold">3</h2>
                        <p className='text-lg text-gray-400'>On Track</p>
                    </div>
                </div>
                <div className="card shadow ">
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-semibold">6</h2>
                        <p className='text-lg text-gray-400'>Need Attention</p>
                    </div>
                </div>
                <div className="card shadow ">
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-semibold">12</h2>
                        <p className='text-lg text-gray-400'>Interactions This Month</p>
                    </div>
                </div>
            </div> */}
          
        </div>
    );
};

export default Navbar;