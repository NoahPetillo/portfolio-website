import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import SkillBadge from '../ui/SkillBadge'
import skills from '../../data/skills'

function SkillRow({ category, items }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
  }
  const badge = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  }

  return (
    <div ref={ref} className="space-y-3">
      <h3 className="text-xs font-mono font-medium text-accent uppercase tracking-widest">
        {category}
      </h3>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={container}
        initial={prefersReduced ? false : 'hidden'}
        animate={isInView ? 'show' : 'hidden'}
      >
        {items.map((label) => (
          <motion.div key={label} variants={badge}>
            <SkillBadge label={label} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface/30">
      <h2 className="text-3xl font-semibold text-primary mb-12">
        Skills
        <span className="block w-12 h-0.5 bg-accent mt-3" />
      </h2>

      <div className="space-y-10">
        {skills.map(({ category, items }) => (
          <SkillRow key={category} category={category} items={items} />
        ))}
      </div>
    </SectionWrapper>
  )
}
