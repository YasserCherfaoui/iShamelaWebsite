import { ctaBand, links } from '../content/copy'

export function CTABand() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
      <div className="double-rule rounded-frame px-6 py-12 text-center md:px-12 md:py-16">
        <p
          className="font-arabic text-xl text-manuscript-ink-soft"
          dir="rtl"
          lang="ar"
          aria-label={ctaBand.arabicAriaLabel}
        >
          {ctaBand.arabic}
        </p>
        <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-manuscript-ink md:text-3xl">
          {ctaBand.line}
        </p>
        <a
          href={links.webApp}
          target="_blank"
          rel="noopener"
          className="btn-primary mt-8"
        >
          {ctaBand.button}
        </a>
      </div>
    </section>
  )
}
