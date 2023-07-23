import React from 'react';
import logo1 from '../../assets/Logo.png';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import background from '../../assets/image 30.svg'
const Footer = () => {
  return (
    <footer className='w-full h-fit flex px-[10%] justify-around max-md:flex-col max-md:justify-center footer relative pt-[50px] pb-[55px] overflow-x-hidden'>
        <div>
            <img src={logo1}/>
        </div>
        <div>
            <p className='text-center text-white text-[18px] mb-5'>Find us on Social Media</p>
            <div className='flex flex-row text-white justify-center max-md:mt-5'>
                <FaDiscord className='mx-3 '/>
                <FaTwitter className='mx-3'/>
                <FaInstagram className='mx-3'/>
                <FaYoutube className='mx-3'/>
            </div>
        </div>
        <div className='text-white text-center h-[50px] mt-[20px]'>
            <h1>We’r always happy to help.</h1>
            <p className='text-[#aaa]'>ContectThedegens@gmail.com</p>
        </div>
        <img src={background} className='absolute bottom-1 left-0 w-[140%] h-[100%] object-cover -z-10'/>
        <p className='text-[#ccccccc5] absolute bottom-3 left-[46%] max-md:left-24'>&reg;2022 . all Right Reserved </p>
    </footer>
  )
}

export default Footer
