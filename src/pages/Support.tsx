import { LegalLayout } from '../components/LegalLayout'
import { site, support } from '../content/copy'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Support() {
  useDocumentTitle(site.titles.support)

  return (
    <LegalLayout title={support.title}>
      <p>{support.intro}</p>
      <ul className="mt-8 list-none space-y-0 divide-y divide-manuscript-gold/30 border-y border-manuscript-gold/30 p-0">
        {support.entries.map((entry) => (
          <li key={entry.id} className="py-6">
            <h2 className="!mt-0">{entry.title}</h2>
            <p className="mb-3 text-manuscript-ink-soft">{entry.body}</p>
            {'href' in entry && entry.href && 'linkLabel' in entry && (
              <a href={entry.href} target="_blank" rel="noopener" className="link-text">
                {entry.linkLabel}
              </a>
            )}
            {'emailPlaceholder' in entry && entry.emailPlaceholder && (
              <p className="mb-0">
                <span className="todo-placeholder">{entry.emailPlaceholder}</span>
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-manuscript-ink-soft">{support.closing}</p>
    </LegalLayout>
  )
}
