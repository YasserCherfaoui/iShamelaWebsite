import { LegalLayout, RichText } from '../components/LegalLayout'
import { acknowledgements, site } from '../content/copy'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Acknowledgements() {
  useDocumentTitle(site.titles.acknowledgements)

  return (
    <LegalLayout title={acknowledgements.title}>
      <p>{acknowledgements.intro}</p>
      {acknowledgements.sections.map((section, i) => (
        <section key={i}>
          <h2>{section.heading}</h2>
          {'body' in section && section.body && <p>{section.body}</p>}
          {'datasets' in section && section.datasets && (
            <>
              <ul>
                {section.datasets.map((name) => (
                  <li key={name}>
                    <a
                      href={`https://huggingface.co/datasets/${name}`}
                      target="_blank"
                      rel="noopener"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              {'thanks' in section && section.thanks && <p>{section.thanks}</p>}
            </>
          )}
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
