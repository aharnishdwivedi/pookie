import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Sparkle({ id, x, y, delay }) {
  const size = Math.random() * 8 + 6
  const duration = Math.random() * 2 + 1.5
  
  return (
    <motion.div
      className="magic-sparkle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

function MagicSparkles() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="magic-sparkles-container">
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          id={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          delay={sparkle.delay}
        />
      ))}
    </div>
  )
}

export default MagicSparkles

