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
    <article className="mx-auto max-w-legal px-5 py-16 md:px-8 md:py-24">
      <div className="prose-legal">
        <header className="double-rule mb-10 rounded-frame px-5 py-6 md:px-8">
          <h1>{title}</h1>
          {lastUpdated && lastUpdatedLabel && (
            <p className="mb-0 italic text-manuscript-ink-soft">
              {lastUpdatedLabel}{' '}
              <span className="todo-placeholder not-italic">{lastUpdated}</span>
            </p>
          )}
        </header>
        {children}
      </div>
    </article>
  )
}

type RichPart =
  | { type: 'text'; text: string }
  | { type: 'link'; text: string; href: string }
  | { type: 'todo'; text: string }

export function RichText({ parts }: { parts: readonly RichPart[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (part.type === 'link') {
          return (
            <a key={i} href={part.href} target="_blank" rel="noopener">
              {part.text}
            </a>
          )
        }
        if (part.type === 'todo') {
          return (
            <span key={i} className="todo-placeholder">
              {part.text}
            </span>
          )
        }
        return <span key={i}>{part.text}</span>
      })}
    </>
  )
}
