import { LegalLayout, RichText } from '../components/LegalLayout'
import { privacy, site } from '../content/copy'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Privacy() {
  useDocumentTitle(site.titles.privacy)

  return (
    <LegalLayout
      title={privacy.title}
      lastUpdated={privacy.lastUpdated}
      lastUpdatedLabel={privacy.lastUpdatedLabel}
    >
      {privacy.sections.map((section, i) => (
        <section key={i}>
          {'heading' in section && section.heading && <h2>{section.heading}</h2>}
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
