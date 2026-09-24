import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import { pathwaySummary, programs } from '../content'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="How our programs work together"
        title="From income stability to housing ownership"
        intro={pathwaySummary}
        image="/images/housing-rehab.jpg"
      />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:space-y-28 lg:px-8 lg:py-28">
        {programs.map((p, i) => (
          <section key={p.id} id={p.id} className="grid scroll-mt-28 items-center gap-10 md:grid-cols-2 lg:gap-16">
            <img
              src={p.image}
              alt={p.imageAlt}
              className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-lg ${i % 2 === 1 ? 'md:order-2' : ''}`}
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                Step {i + 1} · {p.role}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-forest-800 sm:text-4xl">{p.name}</h2>
              {p.short !== p.name && <p className="mt-1 font-semibold text-bark-600">{p.short}</p>}
              <p className="mt-5 text-lg leading-relaxed text-ink/80">{p.description}</p>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  )
}
