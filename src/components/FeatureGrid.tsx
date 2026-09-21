import {
  AlignRight,
  BookOpen,
  Bookmark,
  Library,
  MonitorSmartphone,
  Search,
  type LucideIcon,
} from 'lucide-react'
import { features } from '../content/copy'

const icons: Record<(typeof features.items)[number]['icon'], LucideIcon> = {
  BookOpen,
  Search,
  AlignRight,
  Bookmark,
  Library,
  MonitorSmartphone,
}

export function FeatureGrid() {
  return (
    <section id="features" className="pb-20 md:pb-24">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-5 md:px-8">
        <h2 className="m-0 font-display text-[28px] font-semibold text-brand-forest md:text-[34px]">
          {features.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-0 p-0 md:grid-cols-2 md:gap-x-16">
          {features.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <li
                key={item.id}
                className="flex gap-4 border-t border-brand-gold/50 py-[26px]"
              >
                <Icon
                  className="mt-1 shrink-0 text-brand-forest"
                  size={24}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div className="flex flex-col gap-1.5">
                  <h3 className="m-0 text-[19px] font-semibold text-brand-forest">
                    {item.title}
                  </h3>
                  <p className="m-0 text-base leading-relaxed text-brand-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
