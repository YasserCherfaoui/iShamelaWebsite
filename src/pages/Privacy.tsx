import { LegalCallout, LegalLayout, RichText } from '../components/LegalLayout'
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
      {privacy.sections.map((section, i) => {
        const isCallout =
          'heading' in section && section.heading === 'What we collect: nothing.'

        if (isCallout) {
          return (
            <LegalCallout key={i}>
              <p>
                <strong className="text-brand-forest">{section.heading}</strong>{' '}
                {'body' in section ? section.body : null}
              </p>
            </LegalCallout>
          )
        }

        return (
          <section key={i} className="flex flex-col gap-2">
            {'heading' in section && section.heading && (
              <h2 className="!mt-0">{section.heading.replace(/\.$/, '')}</h2>
            )}
            {'body' in section && section.body && <p>{section.body}</p>}
            {'bodyParts' in section && section.bodyParts && (
              <p>
                <RichText parts={section.bodyParts} />
              </p>
            )}
          </section>
        )
      })}
    </LegalLayout>
  )
}
