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
    <section id="features" className="section-rule">
      <div className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-manuscript-ink md:text-4xl">
          {features.title}
        </h2>
        <ul className="mt-12 grid gap-0 md:grid-cols-2">
          {features.items.map((item, index) => {
            const Icon = icons[item.icon]
            const isLeft = index % 2 === 0
            return (
              <li
                key={item.id}
                className={`border-t border-manuscript-gold/30 py-8 ${
                  isLeft ? 'md:pr-10' : 'md:border-l md:pl-10'
                }`}
              >
                <div className="flex gap-4">
                  <Icon
                    className="mt-1 shrink-0 text-manuscript-madder"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-manuscript-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-manuscript-ink-soft">{item.body}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
