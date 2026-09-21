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
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className="link-light text-[15px]">
        {children}
      </a>
    )
  }

  if (href.startsWith('/#')) {
    return (
      <a href={href} className="link-light text-[15px]">
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className="link-light text-[15px]">
      {children}
    </Link>
  )
}

export function Footer() {
  const version = useAppVersion()
  const year = new Date().getFullYear()
  const columns = [footer.columns.product, footer.columns.legal, footer.columns.support]

  return (
    <footer className="bg-brand-forest-deep">
      <div className="border-b border-brand-gold/85" />
      <div className="mt-1 border-b border-brand-gold/40" />

      <div className="mx-auto max-w-content px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4 md:gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/icon-foreground.svg"
                alt=""
                className="block h-[34px] w-[34px]"
              />
              <span className="text-sm font-semibold tracking-[0.3em] text-brand-gold">
                {site.wordmark}
              </span>
            </div>
            <p className="max-w-[28ch] text-[15px] leading-relaxed text-brand-paper/70">
              {footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-brand-paper">{col.title}</h3>
              {col.links.map((item) => (
                <FooterLink key={item.label} href={item.href} external={item.external}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-col gap-4 border-t border-brand-gold/35 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-brand-paper/60">{footer.copyright(year)}</p>
          <a
            href={links.releases}
            target="_blank"
            rel="noopener"
            className="inline-flex w-fit items-center rounded-btn border border-brand-gold/50 px-3 py-1.5 text-brand-gold no-underline transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
          >
            {footer.versionPrefix} {version}
          </a>
        </div>
      </div>
    </footer>
  )
}
