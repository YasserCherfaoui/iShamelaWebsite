import { ctaBand, links } from '../content/copy'
import { Rosette } from './Rosette'

export function CTABand() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="double-frame">
          <div className="double-frame-inner flex flex-col items-center gap-[18px] px-6 py-12 md:px-12 md:py-16">
            <Rosette size={18} />
            <p
              className="m-0 font-arabic text-2xl font-bold text-brand-forest"
              dir="rtl"
              lang="ar"
              aria-label={ctaBand.arabicAriaLabel}
            >
              {ctaBand.arabic}
            </p>
            <h2 className="m-0 text-center font-display text-[28px] font-semibold text-brand-forest md:text-[38px]">
              {ctaBand.line}
            </h2>
            <a
              href={links.webApp}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-1.5 px-7 py-3.5 text-[17px]"
            >
              {ctaBand.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
