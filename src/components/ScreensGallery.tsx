import { screens } from '../content/copy'

export function ScreensGallery() {
  return (
    <section id={screens.id} className="py-16 md:py-[88px]">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-5 md:px-8">
        <h2 className="m-0 font-display text-[28px] font-semibold text-brand-forest md:text-[34px]">
          {screens.title}
        </h2>
        <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {screens.items.map((item) => (
            <figure
              key={item.id}
              className="m-0 flex w-[160px] shrink-0 flex-col gap-2.5 md:w-auto md:flex-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="block h-auto w-full rounded-shot border border-brand-forest/30"
                width={196}
                height={424}
                loading="lazy"
              />
              <figcaption className="text-center text-sm text-brand-muted">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
