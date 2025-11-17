import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Particle({ id, x, y, color }) {
  const size = Math.random() * 4 + 2
  const duration = Math.random() * 2 + 1

  return (
    <motion.div
      className="interactive-particle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, (Math.random() - 0.5) * 100],
        y: [0, (Math.random() - 0.5) * 100]
      }}
      transition={{
        duration: duration,
        ease: "easeOut"
      }}
    />
  )
}

function InteractiveParticles({ mouseX, mouseY, active }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (active) {
      const colors = ['#B0E0E6', '#87CEEB', '#E0F6FF', '#ADD8E6']
      const newParticle = {
        id: Date.now() + Math.random(),
        x: (mouseX / window.innerWidth) * 100,
        y: (mouseY / window.innerHeight) * 100,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
      setParticles(prev => [...prev.slice(-20), newParticle])
    }
  }, [mouseX, mouseY, active])

  return (
    <div className="interactive-particles-container">
      {particles.map(particle => (
        <Particle
          key={particle.id}
          id={particle.id}
          x={particle.x}
          y={particle.y}
          color={particle.color}
        />
      ))}
    </div>
  )
}

export default InteractiveParticles

