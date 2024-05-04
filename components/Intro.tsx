'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowBarRight, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      {/* Profile Image */}
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
     
      {/* Intro Text */}
      <motion.div 
        className='mb-10 mt-4 px-4 text-2xl sm:text-xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className='font-bold '>Hi, I'm Prashay!</p> <br />
        <p>
          I'm a Software Engineer based in the San Francisco Bay Area.
          I love building full stack web applications and learning new technologies.
          I strive to create useful applications with beautiful and functional user interfaces.
        </p>
      </motion.div>
      
      {/* Contact Links */}
      <motion.div 
        className='flex flex-col justify-center items-center sm:flex-row gap-4'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1}}
      >
          <Link 
            href='#contact' 
            className='px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:scale-110 hover:bg-gray-600 outline-none focus:scale-110 active:scale-105 transition'
          >
            Contact Me <BsArrowBarRight className='inline-block ml-1 opacity-70' />
          </Link>
          <a 
          href=""
          className='px-4 py-2 bg-white rounded-full shadow-lg hover:scale-110 hover:bg-gray-100 outline-none focus:scale-110 active:scale-105 transition'
          >
            Download Resume <HiDownload className='inline-block ml-1 opacity-70' />
          </a>
          <a 
            href="https://www.linkedin.com/in/prashaymehta"
            target="_blank"
            className='px-4 py-3 bg-white rounded-full shadow-lg hover:scale-110 hover:bg-gray-100 outline-none focus:scale-110 active:scale-105 transition'
          >
              <BsLinkedin />
          </a>
          <a 
            href="https://www.github.com/wadesword89"
            target="_blank"
            className='px-4 py-3 bg-white rounded-full shadow-lg hover:scale-110 hover:bg-gray-100 outline-none focus:scale-110 active:scale-105 transition'
          >
              <FaGithub />
          </a>
      </motion.div>
    </section>
  )
}

export default Intro