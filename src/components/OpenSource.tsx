import { links, openSource } from '../content/copy'

export function OpenSource() {
  return (
    <section className="section-rule">
      <div className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-manuscript-ink md:text-4xl">
          {openSource.title}
        </h2>
        <p className="mt-6 max-w-[68ch] text-manuscript-ink-soft">{openSource.body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={links.github}
            target="_blank"
            rel="noopener"
            className="btn-outline"
          >
            {openSource.starCta}
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener"
            className="link-text"
          >
            {openSource.docsCta}
          </a>
        </div>
      </div>
    </section>
  )
}
