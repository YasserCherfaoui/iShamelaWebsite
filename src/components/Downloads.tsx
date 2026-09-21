import { downloads } from '../content/copy'

export function Downloads() {
  return (
    <section id={downloads.id} className="bg-brand-forest py-16 md:py-[88px]">
      <div className="mx-auto flex max-w-content flex-col gap-9 px-5 md:px-8">
        <h2 className="m-0 font-display text-[28px] font-semibold text-brand-paper md:text-[34px]">
          {downloads.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 md:grid-cols-3">
          {downloads.platforms.map((platform) => (
            <li
              key={platform.id}
              className="flex items-center justify-between gap-4 rounded-[10px] bg-brand-cream px-5 py-[18px]"
            >
              <span className="text-[17px] font-semibold text-brand-forest">
                {platform.name}
              </span>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener"
                className="link-text shrink-0 text-base"
              >
                {platform.action}
              </a>
            </li>
          ))}
        </ul>
        <p className="m-0 text-[15px] text-brand-paper/75">{downloads.note}</p>
      </div>
    </section>
  )
}
