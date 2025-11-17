import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import her1 from '../assets/her1.png'
import her2 from '../assets/her2.png'
import her3 from '../assets/her3.png'
import her4 from '../assets/her4.png'

function HerGallery({ onImageClick }) {
  const [clickedHeart, setClickedHeart] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const images = [her1, her2, her3, her4]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="main-gallery-container">
      <div className="gallery-carousel">
        <motion.button
          className="gallery-nav-button gallery-nav-prev"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
        
        <motion.div
          className="gallery-carousel-content"
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => {
            onImageClick()
            setClickedHeart('center')
            setTimeout(() => setClickedHeart(null), 800)
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Princess ${currentIndex + 1}`}
            className="gallery-carousel-image"
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
                👑
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          className="gallery-nav-button gallery-nav-next"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </div>
      
      <div className="gallery-dots">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

export default HerGallery
