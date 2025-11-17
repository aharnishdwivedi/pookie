import React, { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HerGallery from './components/HerGallery'
import Quote from './components/Quote'
import PrincessGame from './components/PrincessGame'
import FloatingHearts from './components/FloatingHearts'
import Confetti from './components/Confetti'
import CursorGlitter from './components/CursorGlitter'
import MagicSparkles from './components/MagicSparkles'
import her2 from './assets/her2.png'
import her3 from './assets/her3.png'

const quotes = [
  "Every princess deserves a day as magical as you are.",
  "Today, the kingdom celebrates you, our beautiful princess.",
  "In a world full of ordinary, you are extraordinary.",
  "Your grace and beauty light up every room you enter.",
  "A princess like you makes every day feel like a fairy tale.",
  "You are the crown jewel of my heart, always."
]

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [confettiTrigger, setConfettiTrigger] = useState(0)
  const [showHeartBurst, setShowHeartBurst] = useState(false)
  const [glitterActive, setGlitterActive] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const handleImageClick = useCallback(() => {
    setConfettiTrigger(prev => prev + 1)
    setShowHeartBurst(true)
    setTimeout(() => setShowHeartBurst(false), 800)
  }, [])

  return (
    <div 
      className="app disney-theme"
      onMouseEnter={() => setGlitterActive(true)}
      onMouseLeave={() => setGlitterActive(false)}
    >
      {/* Magical Background Elements */}
      <div className="castle-background"></div>
      <MagicSparkles />
      <FloatingHearts />
      <Confetti trigger={confettiTrigger} />
      <CursorGlitter 
        mouseX={mousePosition.x} 
        mouseY={mousePosition.y}
        active={glitterActive}
      />

      {/* Castle Header */}
      <motion.header 
        className="castle-header"
        style={{ opacity: headerOpacity }}
      >
        <div className="castle-towers">
          <div className="tower tower-left"></div>
          <div className="tower tower-center"></div>
          <div className="tower tower-right"></div>
        </div>
        
        <motion.div
          className="castle-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="castle-title"
            animate={{ 
              scale: [1, 1.03, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            👑 Princess Day 👑
          </motion.h1>
          <motion.p 
            className="castle-subtitle"
            animate={{
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Once upon a time, in a kingdom far away...
          </motion.p>
        </motion.div>

        <motion.div
          className="princess-portrait"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleImageClick}
        >
          <div className="portrait-frame">
            <img 
              src={her2} 
              alt="Princess" 
              className="portrait-image"
              loading="eager"
            />
            <div className="portrait-crown">👑</div>
          </div>
        </motion.div>
      </motion.header>

      {/* Storybook Section 1 */}
      <section className="storybook-section story-1">
        <div className="storybook-page">
          <div className="storybook-content">
            <motion.div
              className="story-illustration"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Quote text={quotes[0]} delay={0} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Storybook Section */}
      <section className="storybook-section story-gallery">
        <div className="storybook-page">
          <h2 className="story-title">The Royal Gallery</h2>
          <div className="storybook-content">
            <HerGallery onImageClick={handleImageClick} />
          </div>
        </div>
      </section>

      {/* Storybook Section 2 */}
      <section className="storybook-section story-2">
        <div className="storybook-page">
          <div className="storybook-content">
            <Quote text={quotes[1]} delay={0} />
            <Quote text={quotes[2]} delay={0.2} />
          </div>
        </div>
      </section>

      {/* Enchanted Forest Section */}
      <section className="storybook-section story-forest">
        <div className="storybook-page">
          <h2 className="story-title">The Enchanted Moment</h2>
          <motion.div
            className="forest-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="forest-image-wrapper">
              <img 
                src={her3} 
                alt="Princess" 
                className="forest-image"
                loading="lazy"
              />
              <div className="forest-decorations">
                <span className="deco-star">✨</span>
                <span className="deco-star">⭐</span>
                <span className="deco-star">💫</span>
              </div>
            </div>
            <Quote text={quotes[3]} delay={0.1} />
          </motion.div>
        </div>
      </section>

      {/* Storybook Section 3 */}
      <section className="storybook-section story-3">
        <div className="storybook-page">
          <div className="storybook-content">
            <Quote text={quotes[4]} delay={0} />
            <Quote text={quotes[5]} delay={0.2} />
          </div>
        </div>
      </section>

      {/* Game Section - Magical Quest */}
      <section className="storybook-section story-game">
        <div className="storybook-page">
          <h2 className="story-title">The Royal Quest</h2>
          <div className="storybook-content">
            <PrincessGame />
          </div>
        </div>
      </section>

      {/* Final Storybook Page */}
      <section className="storybook-section story-end">
        <div className="storybook-page">
          <motion.div
            className="story-end-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="story-end-title">And they lived happily ever after...</h2>
            <motion.p 
              className="footer-text"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Made with love, for My princess Urvashi. 👑
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
