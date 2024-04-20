'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Image
            src="/portrait.jpg"
            alt="Prashay portrait"
            width={200}
            height={200}
            priority={true}
            className='rounded-full h-40 w-40 object-cover border-[3px] border-white shadow-lg'
          />
        </motion.div>
      </div>
      <p className='mb-10 mt-4 px-4 text-2xl border-4 sm:text-xl'>
        <span className='font-bold '>Hi, I'm Prashay! 👋🏽</span> <br />
        I'm a full-stack developer based in San Francisco, CA. 
        I love building web applications and learning new technologies. 
        I am passionate about creating beautiful and functional user interfaces.
      </p>
    </section>
  )
}

export default Intro