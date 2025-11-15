import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import HerGallery from './components/HerGallery'
import Quote from './components/Quote'
import GiftReveal from './components/GiftReveal'
import FloatingHearts from './components/FloatingHearts'
import Confetti from './components/Confetti'
import InteractiveParticles from './components/InteractiveParticles'
import PersonalMessage from './components/PersonalMessage'
import her1 from './assets/her1.png'
import her2 from './assets/her2.png'
import her3 from './assets/her3.png'

const quotes = [
  "You feel like home in every version of the universe.",
  "My favorite place will always be next to you.",
  "You make the ordinary feel magical.",
  "I choose you in every lifetime.",
  "Your smile is my favorite kind of sunrise.",
  "With you, everything feels softer."
]

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [confettiTrigger, setConfettiTrigger] = useState(0)
  const [particlesActive, setParticlesActive] = useState(false)
  const [showHeartBurst, setShowHeartBurst] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleImageClick = () => {
    setConfettiTrigger(prev => prev + 1)
    setShowHeartBurst(true)
    setTimeout(() => setShowHeartBurst(false), 800)
  }

  return (
    <div 
      className="app"
      onMouseEnter={() => setParticlesActive(true)}
      onMouseLeave={() => setParticlesActive(false)}
    >
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Confetti */}
      <Confetti trigger={confettiTrigger} />

      {/* Interactive Particles */}
      <InteractiveParticles 
        mouseX={mousePosition.x} 
        mouseY={mousePosition.y}
        active={particlesActive}
      />

      {/* Hero Header with First Image - Interactive */}
      <motion.header 
        className="header"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <motion.div
          className="header-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="header-title"
            animate={{ 
              textShadow: [
                "0 2px 10px rgba(255, 182, 193, 0.3)",
                "0 4px 20px rgba(255, 182, 193, 0.5)",
                "0 2px 10px rgba(255, 182, 193, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            For You
          </motion.h1>
          <motion.p 
            className="header-subtitle"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            A little something to remind you how special you are
          </motion.p>
        </motion.div>
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotate: -3
          }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            x: (mousePosition.x / window.innerWidth - 0.5) * 30,
            y: (mousePosition.y / window.innerHeight - 0.5) * 30
          }}
          whileHover={{ scale: 1.15, rotate: 0 }}
          onClick={handleImageClick}
        >
          <img 
            src={her1} 
            alt="Her" 
            className="hero-image"
          />
          <AnimatePresence>
            {showHeartBurst && (
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
      </motion.header>

      {/* First Quote */}
      <Quote text={quotes[0]} delay={0.5} />

      {/* Main Gallery Section - Creative Interactive Layout */}
      <motion.section 
        className="main-gallery-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <HerGallery onImageClick={handleImageClick} />
      </motion.section>

      {/* Floating Quote Section */}
      <motion.div
        className="floating-quote-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Quote text={quotes[1]} delay={0} />
        <Quote text={quotes[2]} delay={0.2} />
      </motion.div>

      {/* Final Image Showcase - Interactive */}
      <motion.section
        className="final-showcase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="showcase-content">
          <Quote text={quotes[3]} delay={0} />
          <motion.div
            className="showcase-image-wrapper"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.12, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleImageClick}
            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <img 
              src={her3} 
              alt="Her" 
              className="showcase-image"
            />
            <AnimatePresence>
              {showHeartBurst && (
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
      </motion.section>

      {/* Closing Quotes */}
      <motion.div
        className="closing-quotes"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Quote text={quotes[4]} delay={0} />
        <Quote text={quotes[5]} delay={0.2} />
      </motion.div>

      {/* Gift Reveal Section */}
      <motion.section
        className="gift-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <GiftReveal onReveal={() => {
          setConfettiTrigger(prev => prev + 1)
          setTimeout(() => setConfettiTrigger(prev => prev + 1), 500)
        }} />
      </motion.section>

      {/* Personal Message Section */}
      <PersonalMessage />

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="footer-text"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Made with love, for her.
        </motion.p>
      </motion.footer>
    </div>
  )
}

export default App
