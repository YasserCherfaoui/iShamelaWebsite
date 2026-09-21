import { hero, links, site } from '../content/copy'
import { Rosette } from './Rosette'

export function Hero() {
  return (
    <section className="bg-brand-forest px-4 py-8 md:px-11 md:py-11">
      <div className="double-frame">
        <div className="double-frame-inner px-5 py-10 md:px-[72px] md:py-16">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[72px]">
            <div className="flex w-full max-w-[560px] flex-col gap-[22px] lg:shrink-0">
              <div className="hero-reveal flex items-center gap-2.5">
                <Rosette size={15} />
                <span className="text-[13px] font-semibold tracking-[0.35em] text-brand-gold">
                  {site.wordmark}
                </span>
              </div>

              <p
                className="hero-reveal hero-reveal-delay-1 m-0 font-arabic text-[22px] font-bold text-brand-gold md:text-[26px]"
                dir="rtl"
                lang="ar"
                aria-label={hero.arabicAriaLabel}
              >
                {hero.arabic}
              </p>

              <h1 className="hero-reveal hero-reveal-delay-1 m-0 font-display text-[34px] font-semibold leading-[1.12] tracking-[-0.01em] text-brand-paper md:text-[50px]">
                {hero.headline}
              </h1>

              <p className="hero-reveal hero-reveal-delay-2 m-0 text-lg leading-[1.65] text-brand-paper/85">
                {hero.subline}
              </p>

              <div className="hero-reveal hero-reveal-delay-3 mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={links.webApp}
                  target="_blank"
                  rel="noopener"
                  className="btn-gold px-[26px] py-3.5 text-[17px]"
                >
                  {hero.primaryCta}
                </a>
                <a
                  href="#downloads"
                  className="btn-outline-light px-[26px] py-[13px] text-[17px]"
                >
                  {hero.secondaryCta}
                </a>
              </div>

              <p className="hero-reveal hero-reveal-delay-3 m-0 text-[15px] text-brand-paper/70">
                {hero.trustLine}
              </p>
            </div>

            <div className="flex flex-1 justify-center">
              <img
                src={hero.phoneSrc}
                alt={hero.phoneAlt}
                className="block h-auto w-[260px] rounded-phone border border-brand-gold/50 md:w-[330px]"
                width={330}
                height={714}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
