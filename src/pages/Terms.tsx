import { LegalLayout, RichText } from '../components/LegalLayout'
import { site, terms } from '../content/copy'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Terms() {
  useDocumentTitle(site.titles.terms)

  return (
    <LegalLayout
      title={terms.title}
      lastUpdated={terms.lastUpdated}
      lastUpdatedLabel={terms.lastUpdatedLabel}
    >
      <p>{terms.intro}</p>
      {terms.sections.map((section, i) => (
        <section key={i}>
          <h2>{section.heading}</h2>
          {'body' in section && section.body && <p>{section.body}</p>}
          {'bodyParts' in section && section.bodyParts && (
            <p>
              <RichText parts={section.bodyParts} />
            </p>
          )}
        </section>
      ))}
    </LegalLayout>
  )
}
