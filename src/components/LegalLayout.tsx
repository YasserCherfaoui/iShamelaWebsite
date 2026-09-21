import type { ReactNode } from 'react'

type LegalLayoutProps = {
  title: string
  lastUpdated?: string
  lastUpdatedLabel?: string
  children: ReactNode
}

export function LegalLayout({
  title,
  lastUpdated,
  lastUpdatedLabel,
  children,
}: LegalLayoutProps) {
  return (
    <article className="mx-auto flex max-w-legal flex-col gap-[26px] px-5 py-14 md:px-8 md:py-[72px]">
      <header className="flex flex-col gap-2.5">
        <h1 className="m-0 font-display text-[36px] font-semibold text-brand-forest md:text-[42px]">
          {title}
        </h1>
        {lastUpdated && lastUpdatedLabel && (
          <p className="m-0 text-[15px] italic text-brand-muted">
            {lastUpdatedLabel} {lastUpdated}
          </p>
        )}
      </header>
      <div className="prose-legal flex flex-col gap-[26px]">{children}</div>
    </article>
  )
}

type RichPart =
  | { type: 'text'; text: string }
  | { type: 'link'; text: string; href: string }

export function RichText({ parts }: { parts: readonly RichPart[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (part.type === 'link') {
          const isMailto = part.href.startsWith('mailto:')
          return (
            <a
              key={i}
              href={part.href}
              {...(isMailto ? {} : { target: '_blank', rel: 'noopener' })}
            >
              {part.text}
            </a>
          )
        }
        return <span key={i}>{part.text}</span>
      })}
    </>
  )
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="double-frame">
      <div className="double-frame-inner px-[26px] py-[22px]">{children}</div>
    </div>
  )
}
