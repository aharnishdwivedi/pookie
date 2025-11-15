import React from 'react'
import { motion } from 'framer-motion'
import herImage from '../assets/her1.png'
import meImage from '../assets/me.png'

function CollageUs() {
  return (
    <div className="collage-us-container">
      <motion.div 
        className="collage-us"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.img 
          src={herImage} 
          alt="Her" 
          className="collage-her"
          initial={{ opacity: 0, x: -30, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.img 
          src={meImage} 
          alt="Me" 
          className="collage-me"
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>
    </div>
  )
}

export default CollageUs

