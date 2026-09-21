import { howItWorks } from '../content/copy'

export function HowItWorks() {
  return (
    <section className="section-rule">
      <div className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-manuscript-ink md:text-4xl">
          {howItWorks.title}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step) => (
            <li key={step.number}>
              <span className="font-display text-4xl font-semibold text-manuscript-gold/70">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-manuscript-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[36ch] text-manuscript-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
