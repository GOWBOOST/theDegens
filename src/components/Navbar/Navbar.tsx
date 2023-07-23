import { useState } from 'react';
import degensLogo from '../../assets/Logo.png';
import { FaTwitter } from "react-icons/fa";
import { BiLogoDiscord } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [menu, setMenu] = useState(false)

  return (
    <nav className="w-screen h-fit bg-[#101331] p-5 px-[5%]">
      <div className='text-white flex justify-between flex-row'>
          <div className='w-[30%]'>
            <img src={degensLogo} className='min-w-[200px] object-contain'/>
          </div>
          <ul className='flex flex-row justify-between w-[60%] pt-[20px] tracking-widest text-[15px] max-xl:hidden'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Get Wassified</a></li>
            <li><a href='#'>Rewards</a></li>
            <li><a href='#'>Roadmap</a></li>
            <li><a href='#'>Team</a></li>
            <div className='flex justify-between -ml-10' >
              <li className='text-[23px] mx-2 cursor-pointer'><FaTwitter /></li>
              <li className='text-[23px] mx-2 cursor-pointer'><BiLogoDiscord /></li>
            </div>
          </ul>
          {menu ? <AiOutlineClose onClick={() => setMenu(!menu)} className="text-white text-[30px] xl:hidden mt-2"/> : <RxHamburgerMenu onClick={() => setMenu(!menu)} className="text-white text-[30px] xl:hidden mt-2"/>}
          

      </div>  
      {menu ? 

            <ul className='flex flex-col items-start bg-[#101331] mobile-ul pt-10 xl:hidden'>
            <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Get Wassified</a></li>
              <li><a href='#'>Rewards</a></li>
              <li><a href='#'>Roadmap</a></li>
              <li><a href='#'>Team</a></li>
              <div className='flex justify-between  icons text-white ml-0 text-[20px] mt-5' >
                <li className='text-[30px] mx-2 cursor-pointer'><FaTwitter /></li>
                <li className='text-[30px] mx-2 cursor-pointer'><BiLogoDiscord /></li>
              </div>
            </ul>   
 : <></>}
    </nav>
  );
};

export default Navbar;
