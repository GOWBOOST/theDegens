import React from 'react';
import aboutImg1 from '../../assets/Group 48.png';
import aboutImg2 from '../../assets/Group 51.png';
import aboutImg3 from '../../assets/Group 50.png';
import aboutImg4 from '../../assets/Group 49.png';
import aboutFrame from '../../assets/Category Active.svg';
import pluses from '../../assets/Group 4.svg';
const About = () => {
  return (
    <section className='w-full h-fit px-[10%]  max-md:mt-36 relative'>
        <img src={pluses} className='absolute right-[150px] top-0 w-[200px] max-md:hidden'/>
        <h1 className='sans text-white text-center text-[55px] font-bold max-md:text-[50px] max-md:leading-[1.2]'>
        Check why you <span className='text-[#FF3969]'>Should</span> <br/>
        Choose us
        </h1>
        <div className='w-full h-fit flex flex-wrap flex-row justify-center container-about mt-16'>
            <div>
                <img src={aboutImg1} />
                <h1>Appoinments</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className='relative '>
                <img src={aboutFrame} className='absolute frame'/>
                <img src={aboutImg2} className=''/>
                <h1>Fast Support</h1>
                <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
            <div>
                <img src={aboutImg3} />
                <h1>App Integrations</h1>
                <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
            </div>
            <div>
                <img src={aboutImg4} />
                <h1>Customization</h1>
                <p>We deliver outsourced aviation services for military customers</p>
            </div>
        </div>
    </section>
  )
}

export default About
