import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { footer, links, site } from '../content/copy'
import { useAppVersion } from '../lib/version'

function FooterLink({
  href,
  external,
  children,
}: {
  href: string
  external: boolean
  children: ReactNode
}) {
  const className =
    'text-manuscript-ink-soft transition-colors hover:text-manuscript-madder'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {children}
      </a>
    )
  }

  if (href.startsWith('/#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

export function Footer() {
  const version = useAppVersion()
  const year = new Date().getFullYear()
  const columns = [footer.columns.product, footer.columns.legal, footer.columns.support]

  return (
    <footer className="double-rule mt-0 border-x-0 border-b-0 rounded-none">
      <div className="mx-auto max-w-content px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-manuscript-ink">
              {site.name}
            </p>
            <p className="mt-2 max-w-[28ch] text-manuscript-ink-soft">{footer.tagline}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 font-display text-base font-semibold text-manuscript-ink">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href} external={item.external}>
                      {item.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-rule mt-12 flex flex-col gap-3 pt-6 text-sm text-manuscript-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright(year)}</p>
          <a
            href={links.releases}
            target="_blank"
            rel="noopener"
            className="inline-flex w-fit items-center rounded-btn border border-manuscript-gold/40 px-3 py-1 text-manuscript-ink-soft transition-colors hover:border-manuscript-madder hover:text-manuscript-madder"
          >
            {footer.versionPrefix} {version}
          </a>
        </div>
      </div>
    </footer>
  )
}
