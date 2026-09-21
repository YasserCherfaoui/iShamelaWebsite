import { links, openSource } from '../content/copy'

export function OpenSource() {
  return (
    <section className="pb-20 md:pb-24">
      <div className="mx-auto flex max-w-content flex-col gap-6 border-t border-brand-gold/50 px-5 pt-14 md:px-8">
        <h2 className="m-0 font-display text-[28px] font-semibold text-brand-forest md:text-[34px]">
          {openSource.title}
        </h2>
        <p className="m-0 max-w-[760px] text-[17px] leading-[1.7] text-brand-ink">
          {openSource.body}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={links.github}
            target="_blank"
            rel="noopener"
            className="btn-outline px-[22px] py-3"
          >
            {openSource.starCta}
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener"
            className="link-text text-base"
          >
            {openSource.docsCta}
          </a>
        </div>
      </div>
    </section>
  )
}
