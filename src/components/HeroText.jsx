import { FlipWords } from "./FlipWords"
import {motion} from "motion/react"

const HeroText = () => {
    const cloud = ["Scalable", "Resilient", "Cloud-native", "Serverless", "Multi-cloud", "Secure", "Cost-effective"]
    const variants = {
        hidden: {opacity:0, x:50},
        visible: {opacity:1, x:0},
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*Desktop*/}
        <div className="flex-col hidden md:flex c-space">
                <motion.p className="text-4xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay:1}}>
                            Hi! I'm Jian
                </motion.p>
        <div className="flex flex-col items-start"> 
            <motion.div>
                <motion.p  
                    className="text-6xl font-bold text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:1.2}}
                    >
                        Designing a
                </motion.p>
                <motion.div className="text-8xl font-black text-violet-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:1.5}}>
                        <FlipWords words={cloud}/>
                </motion.div>
            </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:1.8}}>
                    Cloud Architecture
                </motion.p>
        </div>
    </div>
        {/*Mobile*/}
        <div className="flex flex-col space-y-3 md:hidden">
            <motion.h1 className="text-4xl font-medium text-white"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1}}
                >
                    Hi! I'm Jian
            </motion.h1>
            <motion.div>
                <motion.p className="text-6xl font-bold text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:1.2}}
                    >
                        Designing a
                </motion.p>
            <motion.div>
                {/* ✅ FIXED: Changed <motion.p> to <motion.div> */}
                <motion.div className="text-7xl font-black text-violet-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.5}}
                >
                    <FlipWords words={cloud}/>
                </motion.div>
            </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.8}}
                >
                    Cloud Architecture
                </motion.p>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroText