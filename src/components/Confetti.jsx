import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ConfettiPiece({ id, startX, startY, delay, color }) {
  const size = Math.random() * 8 + 4
  const duration = Math.random() * 2 + 1.5
  const endY = window.innerHeight + 100
  const endX = startX + (Math.random() * 200 - 100)
  const rotation = Math.random() * 720 - 360

  return (
    <motion.div
      key={id}
      className="confetti-piece"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        left: `${startX}%`,
        top: `${startY}%`
      }}
      initial={{
        opacity: 1,
        scale: 1,
        rotate: 0
      }}
      animate={{
        y: endY,
        x: endX,
        opacity: [1, 1, 0],
        rotate: rotation,
        scale: [1, 1.2, 0.5]
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeIn"
      }}
    />
  )
}

function Confetti({ trigger }) {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    if (trigger) {
      const colors = ['#B0E0E6', '#87CEEB', '#E0F6FF', '#ADD8E6', '#AFEEEE', '#B0E0E6', '#87CEEB']
      const newPieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: -10,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
      setPieces(newPieces)
    }
  }, [trigger])

  return (
    <div className="confetti-container">
      {pieces.map(piece => (
        <ConfettiPiece
          key={piece.id}
          id={piece.id}
          startX={piece.startX}
          startY={piece.startY}
          delay={piece.delay}
          color={piece.color}
        />
      ))}
    </div>
  )
}

export default Confetti

