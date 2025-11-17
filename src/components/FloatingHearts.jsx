import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Heart({ id, startX, startY, delay }) {
  const colors = ['#B0E0E6', '#87CEEB', '#E0F6FF', '#ADD8E6', '#B0E0E6', '#AFEEEE']
  const emojis = ['👑', '✨', '💎', '⭐', '🦋', '💙']
  const color = colors[Math.floor(Math.random() * colors.length)]
  const emoji = emojis[Math.floor(Math.random() * emojis.length)]
  const size = Math.random() * 20 + 15
  const duration = Math.random() * 3 + 4
  const endY = startY - (Math.random() * 300 + 200)
  const endX = startX + (Math.random() * 200 - 100)

  return (
    <motion.div
      key={id}
      className="floating-heart"
      style={{
        '--heart-color': color,
        '--heart-size': `${size}px`
      }}
      initial={{
        x: startX,
        y: startY,
        opacity: 0,
        scale: 0
      }}
      animate={{
        x: endX,
        y: endY,
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1, 0.8],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    >
      {emoji}
    </motion.div>
  )
}

function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i + Math.random(),
        startX: Math.random() * window.innerWidth,
        startY: window.innerHeight + 50,
        delay: Math.random() * 2
      }))
      setHearts(newHearts)
    }

    generateHearts()
    const interval = setInterval(generateHearts, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-hearts-container">
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          id={heart.id}
          startX={heart.startX}
          startY={heart.startY}
          delay={heart.delay}
        />
      ))}
    </div>
  )
}

export default FloatingHearts

