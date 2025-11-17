import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const princessItems = [
  { id: 1, name: '👑', type: 'crown' },
  { id: 2, name: '💎', type: 'jewel' },
  { id: 3, name: '👠', type: 'shoe' },
  { id: 4, name: '💍', type: 'ring' },
  { id: 5, name: '🌹', type: 'rose' },
  { id: 6, name: '🦋', type: 'butterfly' },
  { id: 7, name: '⭐', type: 'star' },
  { id: 8, name: '✨', type: 'sparkle' },
]

function PrincessGame() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    if (gameStarted && cards.length === 0) {
      initializeGame()
    }
  }, [gameStarted])

  const initializeGame = () => {
    const gameCards = [...princessItems, ...princessItems]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, id: index, isFlipped: false }))
    setCards(gameCards)
    setFlipped([])
    setMatched([])
    setScore(0)
    setMoves(0)
    setGameWon(false)
  }

  const handleCardClick = (cardId) => {
    if (flipped.length === 2 || flipped.includes(cardId) || matched.includes(cardId)) {
      return
    }

    const newFlipped = [...flipped, cardId]
    setFlipped(newFlipped)
    setMoves(prev => prev + 1)

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)

      if (firstCard.type === secondCard.type) {
        setTimeout(() => {
          setMatched(prev => {
            const newMatched = [...prev, first, second]
            if (newMatched.length === cards.length) {
              setTimeout(() => {
                setGameWon(true)
              }, 800)
            }
            return newMatched
          })
          setFlipped([])
          setScore(prev => prev + 10)
        }, 600)
      } else {
        setTimeout(() => {
          setFlipped([])
        }, 1000)
      }
    }
  }

  const startGame = () => {
    setGameStarted(true)
    initializeGame()
  }

  const resetGame = () => {
    initializeGame()
    setGameWon(false)
  }

  return (
    <div className="princess-game-container">
      {!gameStarted ? (
        <motion.div
          className="game-start-screen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="game-title"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            👑 The Royal Quest 👑
          </motion.div>
          <motion.p 
            className="game-instructions"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Find all the matching pairs!<br />
            <span className="instruction-hint">✨ Tap or click cards to reveal them ✨</span>
          </motion.p>
          <div className="button-container">
            <motion.button
              className="game-start-button"
              onClick={startGame}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0 8px 30px rgba(255, 215, 0, 0.4)",
                  "0 12px 40px rgba(255, 215, 0, 0.6)",
                  "0 8px 30px rgba(255, 215, 0, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎮 Start Quest ✨
            </motion.button>
          </div>
        </motion.div>
      ) : gameWon ? (
        <motion.div
          className="game-win-screen"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="win-emoji"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🎉
          </motion.div>
          <h2 className="win-title">🎉 You're a True Princess! 👑</h2>
          <div className="win-stats">
            <motion.p 
              className="win-score"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              ⭐ Score: <span className="score-highlight">{score}</span> points
            </motion.p>
            <motion.p 
              className="win-moves"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              🎯 Moves: <span className="moves-highlight">{moves}</span>
            </motion.p>
          </div>
          <div className="button-container">
            <motion.button
              className="game-reset-button"
              onClick={resetGame}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0 8px 30px rgba(255, 215, 0, 0.4)",
                  "0 12px 40px rgba(255, 215, 0, 0.6)",
                  "0 8px 30px rgba(255, 215, 0, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎮 Play Again ✨
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <div className="game-board-container">
          <div className="game-stats">
            <div className="stat-item">
              <span className="stat-label">Score:</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Moves:</span>
              <span className="stat-value">{moves}</span>
            </div>
          </div>
          <div className="game-board">
            {cards.map((card) => {
              const isFlipped = flipped.includes(card.id)
              const isMatched = matched.includes(card.id)
              const showCard = isFlipped || isMatched

              return (
                <motion.div
                  key={card.id}
                  className={`game-card ${isMatched ? 'matched' : ''} ${showCard ? 'flipped' : ''}`}
                  onClick={() => handleCardClick(card.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <span className="card-back-icon">✨</span>
                    </div>
                    <div className="card-back">
                      <span className="card-icon">{card.name}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="button-container">
            <motion.button
              className="game-reset-button-small"
              onClick={resetGame}
              whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
              whileTap={{ scale: 0.9 }}
            >
              🔄 Reset Quest
            </motion.button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PrincessGame

