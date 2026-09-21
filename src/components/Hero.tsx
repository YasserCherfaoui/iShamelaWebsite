import { Search } from 'lucide-react'
import { hero, links } from '../content/copy'

export function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p
            className="hero-reveal mb-4 font-arabic text-lg text-manuscript-ink-soft"
            dir="rtl"
            lang="ar"
            aria-label={hero.arabicAriaLabel}
          >
            {hero.arabic}
          </p>
          <h1 className="hero-reveal hero-reveal-delay-1 font-display text-4xl font-semibold leading-tight tracking-tight text-manuscript-ink md:text-5xl">
            {hero.headline}
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mt-5 max-w-[68ch] text-manuscript-ink-soft">
            {hero.subline}
          </p>
          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.webApp}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              {hero.primaryCta}
            </a>
            <a href="#downloads" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
          <p className="hero-reveal hero-reveal-delay-3 mt-4 text-sm text-manuscript-ink-soft">
            {hero.trustLine}
          </p>
        </div>

        {/* TODO(owner): replace mock with real app screenshot */}
        <div
          className="double-rule overflow-hidden rounded-frame bg-manuscript-paper p-4 md:p-5"
          role="img"
          aria-label={hero.mock.alt}
        >
          <div className="rounded-btn border border-manuscript-gold/25 bg-manuscript-paper-deep/60 p-4">
            <div className="mb-4 flex items-center gap-2 rounded-btn border border-manuscript-ink/10 bg-manuscript-paper px-3 py-2">
              <Search
                className="shrink-0 text-manuscript-ink-soft"
                size={16}
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="text-sm text-manuscript-ink-soft">
                {hero.mock.searchPlaceholder}
              </span>
            </div>
            <div className="rounded-btn bg-manuscript-paper px-4 py-5" dir="rtl" lang="ar">
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="font-arabic text-xl font-bold text-manuscript-ink">
                  {hero.mock.bookTitle}
                </h2>
                <span className="shrink-0 font-arabic text-sm text-manuscript-ink-soft">
                  {hero.mock.pageLabel}
                </span>
              </div>
              <div className="mb-3 border-t border-manuscript-gold/30" />
              <p className="font-arabic text-lg leading-loose text-manuscript-ink">
                {hero.mock.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
