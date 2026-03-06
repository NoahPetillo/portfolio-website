export default function SkillBadge({ label }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-surface border border-border text-accent-hover whitespace-nowrap">
      {label}
    </span>
  )
}
