import React from 'react'
import drSecImg from '../../assets/image 26 (1).svg';
import playImg from '../../assets/Play button .svg';
import frameButton from '../../assets/Frame.png';
import icon1 from '../../assets/157.9523f189 1.svg';
import icon2 from '../../assets/158.9e99cb03 1.svg';
import icon3 from '../../assets/159.7b977935 1.svg';
import backIcon from '../../assets/Group 6356151.svg';
import backBlur1 from '../../assets/Ellipse 291.svg';
const DragDrop = () => {
  return (
    <section id='hero-sec' className='w-full h-fit px-[10%] flex md:flex-row max-md:flex-col-reverse relative '>
      <div className='max-md:w-full md:w-[50%] max-md:h-[50%] md:h-full md:mt-[150px] max-md:text-center '>
        <span className='text-[#939393]'>DRAG & DROP</span>
        <h1 className='capitalize sans text-white text-left text-[55px] font-bold max-md:text-[50px] max-md:leading-[1.2] max-md:text-center'>Control all elements <br/>
            <span className='text-[#FF3969]'>super</span> easy.
        </h1>
        <div className='flex flex-col justify-start text-white container-drag mt-8'>
            <div>
                <img src={icon1}/>
                <h1>Drag Image & SVG</h1>
                <p>Create beautiful sites at breakneck speed without compromising on your creativit</p>
            </div>
            <div>
                <img src={icon2}/>
                <h1>Create Custom Field</h1>
                <p>Keep your brand front & center with your customer</p>
            </div>
            <div>
                <img src={icon3}/>
                <h1>Custom Attribute</h1>
                <p>Increase your client retention rate by showing your results and value.</p>
            </div>
        </div>
      </div>
      <div className='max-md:w-full md:w-[50%] max-md:h-[50%] md:h-full max-lg:mb-[50px]'>
        <img className='absolute -right-2 w-[40%] max-lg:w-[400px] max-lg:mx-auto top-36 max-md:left-[0%]  max-md:top-10' src={drSecImg} alt='img'/>
        <img className='absolute right-[30%] top-[15%] max-lg:hidden' src={backIcon} alt='img'/>

      </div>
        <img className='md:absolute md:-left-[560px] md:top-[0%] ' src={backBlur1} alt='img'/>
    </section>
  )
}

export default DragDrop
