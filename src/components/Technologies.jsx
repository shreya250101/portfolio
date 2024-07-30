import { FaPython } from "react-icons/fa";
import { SiScikitlearn} from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiDocker, DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { SiKubernetes } from "react-icons/si";
import {motion} from "framer-motion";
const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[15,-15],
    transition:{
      duration:duration,
      ease:"linear",
      ease: "easeInOut",

      repeat: Infinity,
      repeatType:"reverse"
    }
  }
})



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1,y:-0}} 
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-500" />
            </motion.div>


            <motion.div
             variants={iconVariants(3)} 
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiScikitlearn className="text-7xl text-cyan-500" />
            </motion.div>


            <motion.div
             variants={iconVariants(6)} 
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPhp style={{ color: '#787CB5' }}className="text-7xl " />
            </motion.div>



            <motion.div
             variants={iconVariants(7)} 
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPandas className="text-7xl text-green-600" />
            </motion.div>
            <motion.div 
             variants={iconVariants(9.5)} 
             initial="initial"
             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNumpy style={{color:'#0088CC'}} className="text-7xl" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2)} 
             initial="initial"
             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTableau  className="text-7xl text-red-100" />
            </motion.div>
            <motion.div
             variants={iconVariants(3)} 
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPowerbi  className="text-7xl text-yellow-800" />
            </motion.div>
            
            <motion.div
             variants={iconVariants(6.8)} 
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAws style={{color:'#FF9900'}} className="text-7xl" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)} 
             initial="initial"
             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDocker  className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div 
             variants={iconVariants(3)} 
             initial="initial"
             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            < SiKubernetes  className="text-7xl  text-blue-800" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.25)} 
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb  className="text-7xl  text-green-800" />
            </motion.div>
            <motion.div 
             variants={iconVariants(8)} 
             initial="initial"
             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl  text-blue-300" />
            </motion.div>
            <motion.div
             variants={iconVariants(7.5)} 
             initial="initial"
             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <PiMicrosoftExcelLogo className="text-7xl  text-green-800" />
            </motion.div>

            </motion.div>
        </div>

  )
}

export default Technologies
