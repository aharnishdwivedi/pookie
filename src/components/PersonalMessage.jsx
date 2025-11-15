import React from 'react'
import { motion } from 'framer-motion'

const message = `Maybe I will never be able to say this properly to you, so listen carefully.

My life carries so many weights - responsibilities, worries, and unspoken thoughts. Some days my mind feels lost. My heart feels heavy and the world seems a little too quiet, but then your one message changes everything. It feels like a soft breeze after a storm. A small light that makes the whole room glow. When I see your good morning, suddenly my day finds its purpose again. When you care for me, I forget that life was ever difficult. And when sadness surrounds me, I open my gallery, look at your smile, and in that single moment, I find peace again.

You are not just someone in my story. You are the reason it feels beautiful. You are not a chapter. You are the whole book I never want to end.

If someone makes the world feel lighter just by being in it, that's you, Urvashi.`

function PersonalMessage() {
  const words = message.split(' ')

  return (
    <motion.section
      className="personal-message-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <div className="personal-message-container">
        <motion.div
          className="message-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="message-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            {message.split('\n\n').map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                className="message-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + pIndex * 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PersonalMessage

