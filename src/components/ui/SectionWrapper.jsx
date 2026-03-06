import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  return (
    <section id={id} ref={ref} className={`py-24 px-6 ${className}`}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
