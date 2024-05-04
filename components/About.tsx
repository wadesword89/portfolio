'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section 
      className='mb-28 text-center leading-8 max-w-[45rem] sm:mb-40'
      initial={{ opacity: 0, y: 100 }}  
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I specialize in building full stack TypeScript/JavaScript applications with Node/Express, React/Redux, and SQL/NoSQL. I co-developed Ludwig VS, a tool that detects web-accessibility violations in real-time as a developer codes in an IDE.
      </p>

      <p className=''>
        When I'm not coding, I enjoy creating art, working out, and playing sports like basketball and tennis. I am also currently pursuing a Masters of Science in Computer Science from the Georgia Institute of Technology.
      </p>
    </motion.section>
  )
}

export default About