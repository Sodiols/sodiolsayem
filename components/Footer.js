export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
        <span>© 2026 Sodiol Sayem. Built with Next.js, Tailwind CSS and JavaScript.</span>
        <div className="flex gap-5 text-gray-400">
          <a href="https://github.com/Sodiols" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github transition hover:text-gray-700 dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/sodiol-sayem-64184b27b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in transition hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/ignawwte/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram transition hover:text-pink-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
