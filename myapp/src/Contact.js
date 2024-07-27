import React, { useState } from 'react';
import { motion } from "framer-motion";
import Call from './Call.jpeg';

export default function Contact() {
  const [ans, setAns] = useState(true);
  const variant = {
    initial: { y:10,x:20, opacity: 0 },
    animate: {
      y: 120,
      x: 30,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
      }
    }
  };

  return (
    <motion.div className='bg-black opacity-[.8] text-orange-500 min-h-screen p-4'>
  
      <h1 className=' text-3xl text-center mb-8'>CONTACT DETAILS</h1>
      <motion.div className='flex flex-col md:flex md:flex-row justify-around'>
        <motion.div className='mb-8 '>
          <motion.div className='text-lg ' variants={variant} initial="initial" whileInView="animate" transition={{ duration: 1 }}>
            <h1 className='text-6xl mb-3 md:mb-10'>Let's Work</h1>
            <h1 className='text-6xl mb-3 md:mb-10'>Together For</h1>
          
              <h2 className='text-5xl'>FUTURE PURPOSE</h2>
           
         
          </motion.div>
        </motion.div>
        <motion.div className='flex flex-col mt-[10rem] ml-[1rem] md:ml-[20rem]'>
          <motion.form whileInView={{ y: 0, x: 0, opacity: 1 }} initial={{ y: -90, x: -180, opacity: 0 }} transition={{ duration: 2 }}>
            {ans && <img src={Call} onClick={() => setAns(!ans)} className=' cursor-pointer md:w-[24rem] md:h-[20rem] mb-8' alt="Call" />}
            {!ans && 
              <div className='flex flex-col items-center'>
                <p className='text-2xl mb-4'>USERNAME</p>
                <input type='text' className=' h-10 w-64 border-2 border-orange-400 rounded-full bg-transparent text-lg mb-4 px-4' />
                <p className=' text-2xl mb-4'>ANSWER</p>
                <input type='text' className=' h-10 w-64 border-2 border-orange-400 rounded-full bg-transparent text-lg mb-4 px-4' />
                <p className=' text-2xl mb-4'>MESS AGE</p>
                <textarea className=' h-32 w-64 border-2 border-green-400 rounded-lg bg-transparent text-lg mb-4 px-4' />
                <button type='submit' className=' text-white h-10 w-32 text-center text-lg rounded-full bg-blue-600'>SUBMIT</button>
              </div>
            }
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
