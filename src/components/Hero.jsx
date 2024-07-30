
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile.jpg"
import {motion} from "framer-motion";


const container=(delay)=>({
  hidden:{x:-100,opacity:0},
visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}

}})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center lg:items-start">
      
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-4 text-4xl font-thin tracking-tight lg:text-6xl lg:pb-8">
              Shreya Vishwas
            </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible" 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
              Data/Business Analyst
            </motion.span>
            <motion.p
             variants={container(1)}
             initial="hidden"
             animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      


        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.2}}
            src={profilePic}
            alt="Profile"
            className="rounded-full w-80 h-80 lg:w-80 lg:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};


export default Hero;
