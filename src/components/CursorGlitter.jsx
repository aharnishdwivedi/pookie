import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function GlitterParticle({ id, x, y, delay }) {
  const size = Math.random() * 6 + 4
  const duration = Math.random() * 1.5 + 1
  const rotation = Math.random() * 360

  return (
    <motion.div
      key={id}
      className="glitter-particle"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      }}
      initial={{
        opacity: 1,
        scale: 0,
        rotate: 0
      }}
      animate={{
        opacity: [1, 1, 0],
        scale: [0, 1.2, 0.8],
        rotate: [0, rotation],
        y: [0, -30],
        x: [0, (Math.random() - 0.5) * 40]
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    />
  )
}

function CursorGlitter({ mouseX, mouseY, active }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (active && mouseX && mouseY) {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: mouseX,
        y: mouseY,
        delay: 0
      }
      setParticles(prev => [...prev.slice(-15), newParticle])
    }
  }, [mouseX, mouseY, active])

  return (
    <div className="cursor-glitter-container">
      {particles.map(particle => (
        <GlitterParticle
          key={particle.id}
          id={particle.id}
          x={particle.x}
          y={particle.y}
          delay={particle.delay}
        />
      ))}
    </div>
  )
}

export default CursorGlitter

