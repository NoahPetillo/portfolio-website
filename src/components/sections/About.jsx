import SectionWrapper from '../ui/SectionWrapper'

const facts = [
  { label: 'School', value: 'Boston College' },
  { label: 'Year', value: 'Junior · Class of 2027' },
  { label: 'Degree', value: 'B.S. Computer Science' },
  { label: 'Minor', value: 'Mathematics' },
  { label: 'Focus', value: 'ML Research & Data Science' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-semibold text-primary mb-12">
        About Me
        <span className="block w-12 h-0.5 bg-accent mt-3" />
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            I&apos;m a junior at Boston College studying Computer Science with a minor in
            Mathematics, passionate about machine learning research and data science. I love
            diving deep into research papers and translating ideas into working systems.
          </p>
          <p>
            My work spans implementing and extending academic ML research, collaborating on
            multi-agent game theory problems, and building practical tools that create
            real-world impact. I&apos;m actively looking for opportunities in data science and ML
            where I can contribute to meaningful research and engineering challenges.
          </p>
          <p>
            Outside of technology, I have a passion for fitness, and have worked as a personal
            trainer. I also love playing basketball, training MMA, and playing chess.
          </p>
        </div>

        <div className="space-y-3">
          {facts.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border"
            >
              <span className="text-xs font-mono text-accent uppercase tracking-wider w-16 shrink-0">
                {label}
              </span>
              <span className="text-primary text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
