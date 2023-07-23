import React from 'react';
import secImg from '../../assets/Group 6356145.svg';
import playImg from '../../assets/Play button .svg';
import icon1 from '../../assets/150 1.svg';
import icon2 from '../../assets/Vector (2).svg';
import icon3 from '../../assets/Vector (3).svg';
import icon4 from '../../assets/Vector (4).svg';
import frameButton from '../../assets/Frame.png';
const Hero = () => {
  return (
    <section id='hero-sec' className='w-full h-screen px-[10%] flex md:flex-row max-md:flex-col-reverse relative'>
      <div className='max-md:w-full md:w-[50%] max-md:h-[50%] md:h-full mt-[150px] max-md:text-center '>
        <h1 className='text-[100px] leading-[100px] text-white capitalize max-lg:text-[70px] max-lg:leading-tight max-md:text-center max-xl:text-[60px] max-lg:w-[100%] max-md:text-[50px] sans'>Build your<br /> Next
        <span className=' inline-block text-[#FF3969] underline pl-5'>Product</span><br />
            with Degens.
            </h1>
            <p className='text-[#d5d5d5ca] font-thin w-[70%] my-7 max-md:text-center max-md:mx-auto max-md:text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat reiciendis. Autem dolor unde neque consectetur adipisicing elit.
            </p>
            <div className='buttons'>
                <button className='text-white px-5 py-2.5 bg-[#FF3969] rounded-xl font-medium relative'>Find out more
                  <img src={frameButton} className='absolute -top-5 -right-9 w-[35px]'/>
                </button>
                <button className='text-[#abaaaa] px-2 text-xl'><img className='w-[30%] inline-block pt-2 object-contain' src={playImg}/> Play Demo</button>
            </div>
      </div>
      <div className='max-md:w-full md:w-[50%] max-md:h-[50%] md:h-full max-lg:mb-[50px]'>
        <img className='absolute -right-2 w-[45%] max-md:top-[0%] max-md:left-[0%] max-md:w-full' src={secImg} alt='img'/>

      </div>
      <img className='absolute right-0 max-md:top-[50%]  ' src={icon1} alt='img'/>
      <img className='absolute right-[40%] top-[10%] max-md:top-[80%] max-md:left-[10%]' src={icon2} alt='img'/>
      <img className='absolute right-[15%] top-[80%] max-md:top-[50%] max-md:left-[0%]' src={icon3} alt='img'/>
      <img className='absolute right-[40%] top-[77%] max-md:top-[0%] max-md:right-[00%]' src={icon4} alt='img'/>
    </section>
  )
}

export default Hero
