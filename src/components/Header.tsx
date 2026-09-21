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
    'font-body text-base text-brand-forest no-underline transition-colors hover:text-brand-gold'

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brand-gold/50 transition-colors ${
        scrolled ? 'bg-brand-paper/95 backdrop-blur-md' : 'bg-brand-paper'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/assets/logo.svg"
            alt={site.logoAlt}
            className="block h-[38px] w-[38px] rounded-[9px]"
          />
          <span className="font-display text-[23px] font-semibold text-brand-forest">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="/#screens" className={navLinkClass}>
            {nav.screens}
          </a>
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
            className="btn-primary px-[22px] py-[11px]"
          >
            {nav.openApp}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={links.webApp}
            target="_blank"
            rel="noopener"
            className="btn-gold px-4 py-2.5 text-sm"
          >
            {nav.openApp}
          </a>
          <button
            type="button"
            className="rounded-btn p-2 text-brand-forest"
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
          className="border-t border-brand-gold/40 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/#screens" className={navLinkClass}>
                {nav.screens}
              </a>
            </li>
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
