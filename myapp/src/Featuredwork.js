import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Phone from './Phone.jpeg';
import News from './Newsapp.jpeg';

export default function Featuredwork() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='text-red-600  m-8'>
      <div className='text-center mt-12 mb-16'>
        <h2 className='text-6xl'>Featured Work</h2>
      </div>
      <div className='flex flex-col '>
        <div className='md:flex md:flex-row md:gap-3 md:justify-between md:w-[70%] mb-20 float-right items-center' data-aos='zoom-in'>
          <div>
          <img src={Phone} className=' h-[18rem]  rounded-lg' alt="Health Map" />
          </div>
          <div className='md:w-[60%]'>
            <h3 className='text-4xl mb-2'>Health Map</h3>
            <p className='text-xl'>
              Taking in news can feel like drinking from a fire hose. There's an overload of news and information available on social media, news sites, and TV—which makes it nearly impossible to live under a rock, but it can be challenging to find one reliable place to engage with diverse news without being overwhelmed.
            </p>
          </div>
        </div>
        <div className=' md:flex md:w-[74%] mb-12 md:ml-[15rem]' data-aos='zoom-in'>
          <div className=''>
            <h3 className='text-4xl mb-2'>News App</h3>
            <p className='text-xl'>
              Taking in news can feel like drinking from a fire hose. There's an overload of news and information available on social media, news sites, and TV—which makes it nearly impossible to live under a rock, but it can be challenging to find one reliable place to engage with diverse news without being overwhelmed.
            </p>
          </div>
          <img src={News} className=' h-[16rem]  rounded-lg' alt="News App" />
        </div>
        <div className='md:flex items-center md:w-[74%]' data-aos='zoom-in'>
          <img src={Phone} className='mb-10 h-[20rem] mr-6 rounded-lg' alt="Health Map" />
          <div>
            <h3 className='text-4xl mb-2'>Health Map</h3>
            <p className='text-xl'>
              Taking in news can feel like drinking from a fire hose. There's an overload of news and information available on social media, news sites, and TV—which makes it nearly impossible to live under a rock, but it can be challenging to find one reliable place to engage with diverse news without being overwhelmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
