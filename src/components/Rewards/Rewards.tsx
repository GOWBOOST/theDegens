import React from 'react'
import drSecImg from '../../assets/Group 6356162.svg';
import icon from '../../assets/76.c8197e3e 1.svg';
import arrow from '../../assets/Vector (7).svg';
import backIcon from '../../assets/Group 6356164.svg';
import backBlur1 from '../../assets/Ellipse 291.svg';
const Rewards = () => {
  return (
    <section id='hero-sec' className='w-full h-fit px-[10%] flex md:flex-row max-md:flex-col-reverse relative '>
      <div className='max-md:w-full md:w-[50%] max-md:h-[50%] md:h-full max-lg:mb-[50px] max-md:hidden'>
        <img className='absolute -left-2 w-[40%] max-lg:w-[400px] max-lg:mx-auto top-36 max-md:left-[0%] max-md:top-10 max-lg:hidden' src={drSecImg} alt='img'/>
        <img className='absolute left-[30%] top-[20%] max-lg:hidden -z-10' src={backIcon} alt='img'/>
        <img className='absolute left-[23%] -bottom-[10%] max-xl:hidden -z-10' src={arrow} alt='img'/>

      </div>
      <div className='max-md:w-full md:w-[50%] text-right max-md:h-[100%] md:h-full md:mt-[150px] max-lg:text-center max-md:mx-auto'>
        <span className='text-[#939393] text-right'>EMAIL & SMS BROADCAST</span>
        <h1 className='capitalize sans text-white text-right text-[55px] font-bold max-md:text-[50px] max-md:leading-[1.2] max-md:text-center'>We have email, sms <br/>
             <span className='text-[#FF3969]'>Broadcast</span> for you.
        </h1>
        <p className='text-[#ffffffde] tracking-wider font-thin mt-10'>Broadcast and email is best use for something announcing significant <br/> changes .</p>
        <div className='flex flex-col justify-end text-white container-rewards mt-8'>
            <div>
                <img src={icon}/>
                   <p>Makes them purchase your product, service and quis interact website due.</p>
            </div>
            <div>
                <img src={icon}/>
                    <p>Holds and catches their attention lorem.</p>
            </div>
            <div>
                <img src={icon}/>
                    <p>Diverts them to your brand.</p>
            </div>
        </div>
        <button className='py-4 px-8 rounded-xl text-white border-[#ffffffa0] border-[1px] border-solid mt-8 mr-4 max-md:mx-auto' >Learn More</button>
      </div>
        <img className='md:absolute md:-right-[600px] md:top-[0%] ' src={backBlur1} alt='img'/>
    </section>
  )
}

export default Rewards
