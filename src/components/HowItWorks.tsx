import { howItWorks } from '../content/copy'

export function HowItWorks() {
  return (
    <section className="pb-20 md:pb-24">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-5 md:px-8">
        <h2 className="m-0 font-display text-[28px] font-semibold text-brand-forest md:text-[34px]">
          {howItWorks.title}
        </h2>
        <ol className="m-0 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-2.5">
              <span className="font-display text-[58px] font-medium leading-none text-brand-forest">
                {step.number}
              </span>
              <div className="w-11 border-t-2 border-brand-gold" />
              <h3 className="m-0 text-[19px] font-semibold text-brand-forest">
                {step.title}
              </h3>
              <p className="m-0 text-base leading-relaxed text-brand-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
