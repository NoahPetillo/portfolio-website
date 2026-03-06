import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '../ui/Button'

import img1 from '../../assets/IMG_0151.jpg'
import img2 from '../../assets/IMG_0152.jpg'
import img3 from '../../assets/IMG_0153.jpg'
import img4 from '../../assets/IMG_0154.jpg'
import img5 from '../../assets/IMG_0155.jpg'

const images = [img1, img2, img3, img4, img5]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)',
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            variants={container}
            initial={prefersReduced ? false : 'hidden'}
            animate="show"
            className="space-y-6 flex-1"
          >
            <motion.p variants={item} className="text-accent font-mono text-sm font-medium tracking-widest uppercase">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight"
            >
              Noah Petillo
            </motion.h1>

            <motion.div variants={item}>
              <p className="text-xl sm:text-2xl text-secondary font-medium">
                Junior at Boston College &middot; CS &amp; Mathematics
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <Button href="#projects">View Projects</Button>
              <Button variant="ghost" href="/resume.pdf">
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Image slideshow */}
          <motion.div
            variants={item}
            initial={prefersReduced ? false : 'hidden'}
            animate="show"
            className="relative w-64 h-80 lg:w-80 lg:h-96 shrink-0 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="Noah Petillo"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary/40 hover:text-secondary transition-colors duration-200"
        aria-label="Scroll to About section"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
