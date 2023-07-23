import React from 'react';
import img from '../../assets/Mask group.svg';
import img1 from '../../assets/Mask group (1).svg';
import img2 from '../../assets/Mask group (2).svg';
import img3 from '../../assets/Mask group (3).svg';
const Portfolio = () => {
  return (
    <section className='text-white w-full h-fit pt-[200px] px-[10%] relative'>
      <p className='text-[#939393] text-[17px]'>Our Works</p>
      <h1 className='text-[50px] sans'>Our <span className='text-[#FF3969]'>Portfolio</span></h1>
      <div className='flex max-lg:flex-col xl:flex-row justify-between mt-[150px] images-container'>
        <img src={img}/>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
      </div>
    </section>
  )
}

export default Portfolio
