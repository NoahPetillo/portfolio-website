import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import projects from '../../data/projects'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-semibold text-primary mb-12">
        Projects
        <span className="block w-12 h-0.5 bg-accent mt-3" />
      </h2>

      <motion.div
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial={prefersReduced ? false : 'hidden'}
        animate={isInView ? 'show' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariant} className="flex">
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
