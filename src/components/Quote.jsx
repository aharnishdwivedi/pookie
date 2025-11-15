import React from 'react'
import { motion } from 'framer-motion'

function Quote({ text, delay = 0 }) {
  return (
    <motion.div 
      className="quote-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.p 
        className="quote-text"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.p>
    </motion.div>
  )
}

export default Quote
