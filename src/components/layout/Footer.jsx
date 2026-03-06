export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Noah Petillo
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/NoahPetillo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/noah-petillo-37a356314"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
