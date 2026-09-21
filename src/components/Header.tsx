import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { links, nav, site } from '../content/copy'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const navLinkClass =
    'font-body text-manuscript-ink transition-colors hover:text-manuscript-madder'

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-manuscript-gold/20 bg-manuscript-paper/90 backdrop-blur-md'
          : 'border-transparent bg-manuscript-paper/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight text-manuscript-ink no-underline"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="/#features" className={navLinkClass}>
            {nav.features}
          </a>
          <a href="/#downloads" className={navLinkClass}>
            {nav.downloads}
          </a>
          <Link to="/support" className={navLinkClass}>
            {nav.support}
          </Link>
          <a
            href={links.webApp}
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            {nav.openApp}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={links.webApp}
            target="_blank"
            rel="noopener"
            className="btn-primary px-3 py-2 text-sm"
          >
            {nav.openApp}
          </a>
          <button
            type="button"
            className="rounded-btn p-2 text-manuscript-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-manuscript-gold/20 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/#features" className={navLinkClass}>
                {nav.features}
              </a>
            </li>
            <li>
              <a href="/#downloads" className={navLinkClass}>
                {nav.downloads}
              </a>
            </li>
            <li>
              <Link to="/support" className={navLinkClass}>
                {nav.support}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
