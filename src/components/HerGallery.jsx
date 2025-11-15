import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import her1 from '../assets/her1.png'
import her2 from '../assets/her2.png'
import her3 from '../assets/her3.png'

function HerGallery({ onImageClick }) {
  const [clickedHeart, setClickedHeart] = useState(null)
  return (
    <div className="main-gallery-container">
      <div className="main-gallery">
        {/* Center image - larger, more prominent */}
        <motion.div
          className="gallery-item center-item"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.12, rotate: 0, zIndex: 10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onImageClick()
            setClickedHeart('center')
            setTimeout(() => setClickedHeart(null), 800)
          }}
          animate={{
            rotate: [4, 5, 4]
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img
            src={her2}
            alt="Her"
            className="gallery-image center-image"
          />
          <AnimatePresence>
            {clickedHeart === 'center' && (
              <motion.div
                className="heart-burst"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                ❤️
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Side images - overlapping effect */}
        <motion.div
          className="gallery-item left-item"
          initial={{ opacity: 0, x: -100, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.15, rotate: 0, zIndex: 10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onImageClick()
            setClickedHeart('left')
            setTimeout(() => setClickedHeart(null), 800)
          }}
          animate={{
            rotate: [-5, -6, -5]
          }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img
            src={her1}
            alt="Her"
            className="gallery-image side-image"
          />
          <AnimatePresence>
            {clickedHeart === 'left' && (
              <motion.div
                className="heart-burst"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                ❤️
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="gallery-item right-item"
          initial={{ opacity: 0, x: 100, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.15, rotate: 0, zIndex: 10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onImageClick()
            setClickedHeart('right')
            setTimeout(() => setClickedHeart(null), 800)
          }}
          animate={{
            rotate: [5, 6, 5]
          }}
          transition={{
            rotate: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img
            src={her3}
            alt="Her"
            className="gallery-image side-image"
          />
          <AnimatePresence>
            {clickedHeart === 'right' && (
              <motion.div
                className="heart-burst"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                ❤️
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default HerGallery
