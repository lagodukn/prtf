import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}
const Transition = () => {
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#4F5BD5]' 
        variants={transitionVariants} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{delay: 0.1,  duration: 0.2, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#962FBF]' 
        variants={transitionVariants} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{delay: 0.2,  duration: 0.2, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#D62976]' 
        variants={transitionVariants} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{delay: 0.3,  duration: 0.2, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#FA7E1E]' 
        variants={transitionVariants} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{delay: 0.4,  duration: 0.2, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#FEDA75]' 
        variants={transitionVariants} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{delay: 0.5,  duration: 0.2, ease: 'easeInOut'}}
      ></motion.div>
    </>
  );
};

export default Transition;
