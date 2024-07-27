import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import Sun from './sun.png';
import 'aos/dist/aos.css';
import './App.css';
import hacker from './hacker..jpeg';
import Me from './me.jpeg';
import facebook from './facebook.gif';
import twitter from './twitter.png';
import Whatsapp from './whatsapp.png';
import Contact from './Contact';
import Linkdin from './linkedin.png';
import Featuredwork from './Featuredwork';
import Menu from './menu.png';
import Close from './close.png';
import Moon from './full-moon.png';
function App() {
  const section1 = useRef();

  const scroll = (ele) => {
    window.scrollTo({ top: ele.current.offsetTop, behavior: 'smooth' });
  }
  const [sun,setsun]=useState('true');
const [open,setopen]=useState('false')

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [Open, setOpenApp] = useState(false);

  const variant = {
    open: {
      clipPath: "circle(1200px at 50px 160px)",
      transition: { type: 'spring', stiffness: 20,duration:6 },
    },
    closed: {
      clipPath: "circle(1200px at 50px 160px)",
      transition: { type: 'spring', stiffness: 20,duration:2 },
    }
  };
  const [colo,setcolo]=useState('bg-gradient-to-r from-black to-sky-900');
const Change=()=>{
  if(colo==='bg-gradient-to-r from-black to-sky-900'){
  document.body.style.backgroundColor='bg-gradient-to-r from-zinc-600 to-sky-400';
setcolo('bg-gradient-to-r from-zinc-600 to-sky-400');

}
else{
  document.body.style.backgroundColor='bg-gradient-to-r from-black to-sky-900';

  setcolo('bg-gradient-to-r from-black to-sky-900');
}
setsun(!sun);
}
  return (
    <div className={colo}>
     

      <motion.div className='bg-green-500 text-sm md:text-lg flex justify-around md:flex-row md:justify-around items-center'>
        <motion.div className='text-white flex items-center text-center'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 3 }}>
          <p className="text-[1.6rem]">PORTFOLIO</p>
          <img src={hacker} className='rounded-full w-10 h-10 md:w-24 md:h-24' alt="Hacker" />
        </motion.div>
        
        <motion.div className="text-center text-2xl md:text-left md:inline hidden"
          animate={{  x: 0, y: 0 }}
          initial={{  y: -100 }}
          transition={{ duration: 3 }}>
          <button className='mx-2 md:mx-4 hover:text-4xl'>Home</button>
          <button className='mx-2 md:mx-4 hover:text-4xl' onClick={()=>window.scrollTo(0,790)}>Skills</button>
          <button className='mx-2 md:mx-4 hover:text-4xl' onClick={() => window.scrollTo(0, 1600)}>Work</button>
          <button className='mx-2 md:mx-4 hover:text-4xl' onClick={()=>window.scrollTo(0,2700)}>Contact Us</button>
        </motion.div>
        <motion.div className='md:hidden '>
          {open && <button  onClick={()=>{setopen(!open)}}>
          <img src={Menu} className='h-[2rem]'></img></button>}
          {!open && <button  onClick={()=>{setopen(!open)}}>
          <img src={Close} className='h-[2rem]'></img></button>}
         
        </motion.div>
      </motion.div>
      {!open && <motion.div className='flex flex-col gap-6 text-xl text-black w-[100%] float-right bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-center md:hidden'
     variants={variant} animate={Open?"open":"closed"} transition={{type:'spring',stiffness:20,damping:10}}>

<button className='mx-2 md:mx-4 hover:text-4xl'>Home</button>
<button href='#skills' className='mx-2 md:mx-4 hover:text-4xl'>Skills</button>
<button href='#contact' className='mx-2 md:mx-4 hover:text-4xl' onClick={() => window.scrollTo(0, 90000)}>Contact</button>
<button href='/about' className='mx-2 md:mx-4 hover:text-4xl'>About us</button>
</motion.div>}
{sun &&
<button className={'ml-[90rem] w-10 fixed z-[9999]'} onClick={Change}><img src={Sun}></img></button>}

{!sun &&
<button className={'ml-[90rem] w-10 fixed z-[9999]'} onClick={Change}><img src={Moon}></img></button>}
<br></br>
      <button onClick={() => setOpenApp(!Open)} className='p-4 bg-white rounded-xl md:text-2xl '>SKILLS</button>
      {Open&&
      <motion.button variants={variant} animate={Open ? "open" : "closed"} className='bg-purple-500 flex justify-between text-lg md:text-2xl text-white  p-4  my-4'>
       <div className='space-y-4'>
       <div>JAVA</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>REACT</div>
        </div>
        <div className='gap-4 space-y-4'>
        <div>Mongodb</div>
        <div>Nodejs</div>
        <div>SocketIo</div>
        <div>Framer Motion</div>
        </div>
      </motion.button>}
      {/* <button className='fixed bg-white text-green-500 text-2xl md:text-4xl p-4 mb-8 md:w-[20%] rounded-xl' onClick={() => { window.scroll(0, 0) }}>TOP</button> */}

      <div className='  md:text-left'>
        <h2 className='text-red-400 text-[3rem] md:text-6xl text-center'>PORTFOLIO</h2>
        <p className='bg-red-500 w-48 md:w-64 h-1 mx-auto'></p>
      </div>

      <motion.div className='flex md:flex-row justify-around my-20'>
        <motion.div className='flex flex-col gap-4 w-[35%] text-white'>
          <motion.div
            animate={{ y: 0, x: 0, opacity: 1 }}
            initial={{ y: -300, opacity: 0.4 }}
            transition={{ duration: 2 }}>
            <p className='text-purple-300 text-3xl md:text-5xl mb-4'>ARIHANT JAIN</p>
            <p className='text-white text-4xl md:text-6xl'>WEB <span className='text-red-400'>DEVELOPER</span></p>
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -200, opacity: 0.4 }}
            transition={{ duration: 1 }}>
            <p className='text-white text-4xl mb-10 md:text-6xl'><span className='text-green-200'>AND</span> UI <span className='text-blue-400'>DESIGNER</span></p>
            <div className='text-white text-lg md:text-xl'>
              <button className='border-2 p-2 bg-blue-500 mx-2 mb-4'>upload</button>
              <button className='border-2 p-2 bg-blue-500 mx-2'>Contact Me</button>
            </div>
          </motion.div>
          <motion.div className='flex justify-between w-1/2 mx-auto md:mx-0 mt-8'>
            <img src={facebook} className='h-12 w-12 rounded-full m-4' alt="Facebook" />
            <img src={twitter} className='h-12 w-12 m-4' alt="Twitter" />
            <img src={Whatsapp} className='h-12 w-12 m-4' alt="Whatsapp" />
            <img src={Linkdin} className='h-12 w-12 m-4' alt="Linkedin" />
          </motion.div>
        </motion.div>
        <motion.div
          drag
          animate={{ x: 0, opacity: 1, scale: [0.3, 0.5, 0.6, 1] }}
          initial={{ x: 170 }}
          transition={{ duration: 2, type: 'spring', stiffness: 90 }}>
          <img src={Me} className='rounded-[18rem] w-32 h-32 md:w-[20rem] md:h-[24rem]' alt="Me" />
        </motion.div>
      </motion.div>



<h1 className='text-white text-center text-[3rem]'>MY SKILLS</h1>
      <motion.div ref={section1} className='flex flex-col items-center md:flex md:justify-center mt-10 space-y-4 '>
      <motion.div className='md:flex'>
        <motion.div id='border' className='p-4 mb-8  md:w-[20%] bg-red-600' data-aos='slide-up'>
          <h1 className="text-lg md:text-2xl font-bold text-center mb-4">JAVA</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
      
        </motion.div>
        <motion.div id='border' className='p-4 mb-8 md:w-[20%] bg-red-600' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">HTML</h1>
       <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
        </motion.div>
        <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='zoom-in'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">CSS</h1>
       <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
        </motion.div>
        <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='zoom-in'>
          <h1 className="text-sm md:text-xl font-bold text-center mb-4">REACT</h1>
       <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
        </motion.div>
        <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='zoom-in'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">DSA</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div>
        </motion.div>
        
        <motion.div className='md:flex md:justify-center'>
        <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">MONGO DB</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div> 
          <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">NODEJS</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div>
          <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">FRAMER MOTION</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div>
          <motion.div id='border' className='p-4 mb-8 md:w-[20%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">DATA-AOS</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div>
         
          </motion.div>
          <motion.div className='md:flex md:justify-center'>
          <motion.div id='border' className='p-4 mb-8 md:w-[22%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">Socket Io</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>

          </motion.div> 
          <motion.div id='border' className='p-4 mb-8 md:w-[22%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">SQL</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div>
          <motion.div id='border' className='p-4 mb-8 md:w-[22%]' data-aos='slide-up'>
          <h1 className="text-lg md:text-xl font-bold text-center mb-4">TAILSINDCSS</h1>
          <p className='text-sm'>Rohit Sharma and MS Dhoni have been the most successful Indian T20 captains in history. Dhoni's track record includes clinching the inaugural T20 World Cup title in 2007. Dhoni also helped India secure a runners-up finish in 2014.</p>
          </motion.div>
          </motion.div>
      </motion.div>

      <Featuredwork />
      <hr className="my-4" />
      <Contact />
    </div>
  );
}

export default App;