import React from 'react';
import { motion } from "motion/react";
import job1 from '../../assets/job1.jpg'
import job2 from '../../assets/job2.jpg'


const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <motion.img
      src={job1}
      animate={{y:[0,50,0]}}
      transition={{duration:5, repeat:Infinity}}
      className="max-w-sm rounded-t-xl border-s-8 border-b-8 border-blue-500 shadow-2xl"
    />
     <motion.img
      src={job2}
      animate={{x:[100,150,100]}}
      transition={{duration:5, repeat:Infinity}}
      className="max-w-sm rounded-t-xl border-s-8 border-b-8 border-blue-500 shadow-2xl"
    />
   </div>
    <div className='flex-1'>
      <motion.h1
      initial={{scale:0}}
      animate={{scale:1, transition:{duration:4}}}

       className="text-5xl font-bold">Latest <motion.span
       animate={{
        color:['#ff5733', '#33ff33', '#8a33ff'],
        transition:{duration: 4, repeat:Infinity}
        
    }}


       >Jobs</motion.span> For you!</motion.h1>
      <motion.h1
      animate={{
        rotate:360,
        transition:{duration:4}
    }}


       className="text-5xl font-bold">Remote Jobs For you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;