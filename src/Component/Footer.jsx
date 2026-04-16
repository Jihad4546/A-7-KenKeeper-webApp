import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';

const Footer = () => {
    return (
        <div className=' bg-[#244D3F]'>
            <div> 
                <div className='container mx-auto text-center pt-10 pb-4'>
                <h1 className='text-6xl text-white font-bold pb-3'>KeenKeeper</h1>
                <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                
            </div>
            <p className='text-gray-200 text-center p-4 text-xl '>Social Links</p>
                <div className='flex justify-center items-center gap-8'>
                    
                    <div className="bg-white rounded-full p-3 flex items-center justify-center">
                        <MdFacebook size={20} className="text-[#244D3F]" />
                    </div>
                    
                    <div className="bg-white rounded-full p-3 flex items-center justify-center">
                        <FaInstagram size={20} className="text-[#244D3F]" />
                    </div>
                    
                    <div className="bg-white rounded-full p-3 flex items-center justify-center">
                        <FaXTwitter size={20} className="text-[#244D3F]" />
                    </div>
                    
                </div>
            </div>
            <div className='border-t  container mx-auto border-[#1A8862] my-4'>

            </div>
            <div className='md:flex justify-between text-center space-y-3 container mx-auto mb-6 ml-5 text-gray-400'>
                <div>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div>
                    <div className='md:flex justify-between gap-5 '>
                        <p>Privacy Polic</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;