
import {easeInOut, motion, useAnimation} from "framer-motion";
function Practice() {
  const [OpenApp,setOpenApp]=useState(false)
  const control=useAnimation();
  const boxvariant={
    hidden:{
      x:-1500,
    },
    visible:{
      x:1500,
      transition:{
        
        duration:4,
        when:"beforeChildren",
        staggerChildren:.3,
    
      }
    }
  }
  const listvariant={
    hidden:{
      opacity:0,
    },
    visible:{
opacity:1,
    }
    
  }
  return (
    <div>
    {/* <motion.div 
    className="App"
    drag
    animate={{
      x:1750,
      opacity:1.2,
      rotate:360,
    }}
    initial={{x:-6750,
    opacity:.4}}
    transition={{
      duration:4,
      type:'tween',
      damping:6,
      
    }}
    >
       </motion.div>
       <motion.div className='App'
       variants={boxvariant}
       animate="visible"
       initial="hidden">
 {[1,2,3].map(() =>{
    return <motion.li className='box'
    variants={listvariant} ></motion.li>
 })} 
    
   
    </motion.div>
/* circular scale animation */}
{/* <motion.div className='App'
animate={{
  scale:[1,1.6,2,2.6,1],
  borderRadius:["20%","30%","50%","50%","0%"],
  rotate:[0,0,270,270,0],
}}
transition={{
  duration:3,
}}
>

</motion.div>

  <button onClick={()=>{
    control.start({
      x:1250,
      transition:{duration:2},
    })
  }}>Right</button>
   <button onClick={()=>{
    control.start({
      x:0,
      transition:{duration:3},
    })
  }}>Left</button>
  <motion.div className='App'
animate={control}
>
</motion.div> */ }
{/* <motion.div className='main'>
<motion.div className='flex' drag="x">
  
  {[1,2,3,4,5,6,7,8].map((e)=>{
return <motion.div className='App'>
e.value
  </motion.div>
  })}
  </motion.div>
</motion.div> */}

<motion.div className='bg-green-500 h-40 text-8xl items-center flex justify-center' onClick={()=>setOpenApp(!OpenApp)}>
  <p>Framer Motion</p>

</motion.div>
<motion.div className='flex justify-between '>
<motion.div className='flex flex-col gap-4'>
  <p>WE WELCOME YOU</p>
  <p>TO OUR PORTFOLIO</p>
  <p>BEST PORTFOLIO EVER MADE</p>
</motion.div>
</motion.div>

</div>

  );
}

export default App;
