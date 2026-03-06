export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer'
  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20',
    ghost:
      'border border-border text-primary hover:border-accent-hover hover:text-accent-hover bg-transparent',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
