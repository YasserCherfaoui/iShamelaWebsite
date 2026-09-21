import {
  Globe,
  Laptop,
  Monitor,
  Smartphone,
  TabletSmartphone,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { downloads } from '../content/copy'

const icons: Record<(typeof downloads.platforms)[number]['icon'], LucideIcon> = {
  Globe,
  Smartphone,
  TabletSmartphone,
  Monitor,
  Laptop,
  Terminal,
}

export function Downloads() {
  return (
    <section id={downloads.id} className="bg-manuscript-paper-deep">
      <div className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-manuscript-ink md:text-4xl">
          {downloads.title}
        </h2>
        <ul className="mt-10 divide-y divide-manuscript-gold/30 border-y border-manuscript-gold/30">
          {downloads.platforms.map((platform) => {
            const Icon = icons[platform.icon]
            return (
              <li
                key={platform.id}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="text-manuscript-madder"
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="font-display text-lg font-semibold text-manuscript-ink">
                    {platform.name}
                  </span>
                </div>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener"
                  className="link-text shrink-0"
                >
                  {platform.action}
                </a>
              </li>
            )
          })}
        </ul>
        <p className="mt-6 text-sm text-manuscript-ink-soft">{downloads.note}</p>
      </div>
    </section>
  )
}
