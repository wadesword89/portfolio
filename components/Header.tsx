'use client'; //needed since we are using motion.div

import React from 'react'
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className=''>
      {/* motion.div is used to animate the header  */}
      <motion.div 
        // top-0 is used to place the header at the top of the page, 
        // z-50 is used to place the header above the blobs
        className='bg-white w-1/2 h-16 shadow-md fixed border rounded-full top-0 z-50'
        //initial state of the header.
        initial={{ y: -100, opacity: 0 }} //y: -100 moves the header 100px up, opacity: 0 makes the header invisible
        //animate the header 
        animate={{ y: 0, opacity: 1 }} //y: 0 moves the header to its original position, opacity: 1 makes the header visible
      >
      </motion.div>
    </header>
  )
}
