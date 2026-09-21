import { LegalLayout } from '../components/LegalLayout'
import { site, support } from '../content/copy'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Support() {
  useDocumentTitle(site.titles.support)

  return (
    <LegalLayout title={support.title}>
      <p>{support.intro}</p>
      <ul className="m-0 list-none space-y-0 divide-y divide-brand-gold/50 border-y border-brand-gold/50 p-0">
        {support.entries.map((entry) => (
          <li key={entry.id} className="py-6">
            <h2 className="!mt-0 !text-[22px]">{entry.title}</h2>
            <p className="mb-3 text-brand-muted">{entry.body}</p>
            {'href' in entry && entry.href && 'linkLabel' in entry && (
              <a href={entry.href} target="_blank" rel="noopener" className="link-text">
                {entry.linkLabel}
              </a>
            )}
            {'email' in entry && entry.email && (
              <p className="mb-0">
                <a href={`mailto:${entry.email}`} className="link-text">
                  {entry.email}
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="text-brand-muted">{support.closing}</p>
    </LegalLayout>
  )
}
