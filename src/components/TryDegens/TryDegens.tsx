import React from 'react';
import backgroundBlur from '../../assets/Ellipse 293.svg';
import backIcon from '../../assets/Group 6356164.svg';

const TryDegens = () => {
  return (
    <section className='w-full h-fit px-[10%] pt-[150px] py-[10%] relative'>
        <div className='flex justify-center flex-col text-center'>
            <h1 className='text-[60px] sans text-white'>Try Degens <span className='text-[#FF3969]'>Free</span></h1>
            <p className='text-[#d2cdcdfa] my-5 font-thin'>After your 14-day trial of our Professional plan, enjoy the Free version of <br/> Calendly – forever.</p>
            <button className='text-white px-2 py-5 border-[#d2d1d18c] border-[1px] w-[250px] my-12 mx-auto rounded-xl'>Get The Degens App</button>
            <p className='text-[#b8b2b2fa]'>No Credit Card Required. Cancel Anytime</p>
        </div>
        <img src={backgroundBlur} className='absolute top-[0%] left-[0%] w-full opacity-50'/>
        <img className='absolute left-[30%] top-[20%] max-lg:hidden -z-10 opacity-40' src={backIcon} alt='img'/>
        <img className='absolute -right-[0%] top-[50%] max-lg:hidden -z-10 opacity-40' src={backIcon} alt='img'/>
    </section>
  )
}

export default TryDegens
