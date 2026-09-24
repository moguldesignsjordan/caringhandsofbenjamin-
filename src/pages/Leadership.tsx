import { Briefcase, Cpu, Scale } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { board, openSeats, openSeatsIntro } from '../content'

const seatIcons = [Scale, Cpu, Briefcase]

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w) && w.length > 2)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

export default function Leadership() {
  return (
    <>
      <PageHero eyebrow="Board members" title="Leadership and governance" image="/images/program-orientation.jpg" />

      <section className="mx-auto max-w-5xl space-y-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {board.map((m) => (
          <article key={m.name} className="grid gap-6 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-forest-900/5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-10">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-forest-500 to-teal font-display text-3xl font-semibold text-white"
              aria-hidden
            >
              {initials(m.name)}
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">{m.title}</p>
              <h2 className="mt-1 text-3xl font-semibold text-forest-800">{m.name}</h2>
              {m.bio.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-ink/80">{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Open seats" title="Join our Board of Directors" intro={openSeatsIntro} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {openSeats.map((s, i) => {
              const Icon = seatIcons[i]
              return (
                <article key={s.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-forest-900/5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-forest-800">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/75">{s.description}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/get-involved#contact" className="inline-flex rounded-full bg-forest-600 px-7 py-3 font-semibold text-white transition hover:bg-forest-700">
              Express interest in a seat
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
