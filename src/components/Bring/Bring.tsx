import React from 'react';
import line from '../../assets/Group 6356157.svg';
import bigImg from '../../assets/Group 6356158.svg';

const Bring = () => {
  return (
    <section className='w-full h-fit px-[10%] relative mt-40'>
      <div className='w-full flex flex-col flex-nowrap justify-center items-center'>
            <h1 className='capitalize sans text-white text-center text-[55px] font-bold max-md:text-[40px]'>Bring all Team <span className='text-[#FF3969]'>Managment</span> <br/>
                & task togather
            </h1>
            <p className='text-[#c1c1c1ce] text-center max-md:w-[100%] md:w-[50%] my-8 text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <img src={line} className='md:w-[55%] mb-14'/>
                <div className='flex md:flex-row justify-center w-full text-white max-md:flex-col'>
              <div className='mx-14 flex flex-row items-center max-md:flex-col max-md:justify-center max-md:text-center max-md:my-10'>
                <input type="radio" className='mr-3 mb-1 radio-input !important' name="taskType" id="createTask" />
                <label htmlFor="createTask" className='w-70% md:mt-5 max-md:mt-2 tracking-widest'>Create task for any <br/> team person</label>
              </div>
              <div className='mx-14 flex flex-row items-center max-md:flex-col max-md:justify-center max-md:text-center max-md:my-10'>
                <input type="radio" className='mr-3 mb-1 radio-input !important' name="taskType" id="makeTimeframe" />
                <label htmlFor="makeTimeframe" className='w-70% md:mt-5 max-md:mt-2 tracking-widest'>Make timeframe for <br/> do the task</label>
              </div>
              <div className='mx-14 flex flex-row items-center max-md:flex-col max-md:justify-center max-md:text-center max-md:my-10'>
                <input type="radio" className='mr-2 mb-1 radio-input !important' name="taskType" id="getTaskCompleted" />
                <label htmlFor="getTaskCompleted" className='w-70% md:mt-5 max-md:mt-2 tracking-widest'>Get task completed by <br/> your member</label>
              </div>
            </div>
            <img src={bigImg} className='mt-20 w-[70%] max-lg:hidden'/>
      </div>
    </section>
  )
}

export default Bring
