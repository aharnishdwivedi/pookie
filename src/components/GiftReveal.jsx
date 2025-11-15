import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Sparkle({ x, y, delay }) {
  const colors = ['#FF9BB3', '#FFB6C1', '#F7A8B8', '#FFC0CB', '#FFD1DC']
  const color = colors[Math.floor(Math.random() * colors.length)]
  
  return (
    <motion.div
      className="sparkle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        '--sparkle-color': color
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  )
}

function GiftReveal({ onReveal }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sparkles, setSparkles] = useState([])

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true)
      // Generate sparkles
      const newSparkles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5
      }))
      setSparkles(newSparkles)
      if (onReveal) {
        onReveal()
      }
    }
  }

  return (
    <div className="gift-reveal-container">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="gift-box"
            className="gift-box-wrapper"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="gift-box"
              onClick={handleClick}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="gift-box-top"></div>
              <div className="gift-box-bottom"></div>
              <div className="gift-bow">
                <div className="bow-center"></div>
                <div className="bow-left"></div>
                <div className="bow-right"></div>
              </div>
              <p className="gift-hint">Click to open your gift</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="gift-message"
            className="gift-message-wrapper"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="sparkles-container">
              {sparkles.map(sparkle => (
                <Sparkle
                  key={sparkle.id}
                  x={sparkle.x}
                  y={sparkle.y}
                  delay={sparkle.delay}
                />
              ))}
            </div>
            <motion.div
              className="gift-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h2
                className="gift-title"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                🎁
              </motion.h2>
              <motion.p
                className="gift-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                It will be delivered to you
              </motion.p>
              <motion.p
                className="gift-subtext"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                with all my love
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GiftReveal

