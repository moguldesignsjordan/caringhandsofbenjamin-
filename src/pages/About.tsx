import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { about, mission, pathway, pathwaySummary, vision } from '../content'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Rooted in compassion, equity, and second chances" image="/images/field-training.jpg" />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-5 lg:px-8 lg:py-28">
        <div className="md:col-span-3">
          <SectionHeading eyebrow="Who we are" title="Building the infrastructure for economic stability" />
          {about.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-ink/80">{p}</p>
          ))}
        </div>
        <img src="/images/team.jpg" alt="CHOB participants and staff" className="aspect-[3/4] w-full rounded-3xl object-cover md:col-span-2" />
      </section>

      <section className="bg-forest-800 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">Our mission</p>
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{mission}</p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">Our vision</p>
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{vision}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading center eyebrow="Our model" title="A continuous pathway" intro={pathwaySummary} />
        <ol className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {pathway.map((step, i) => (
            <li key={step} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-forest-900/5">
              <span className="font-display text-5xl font-semibold text-leaf">0{i + 1}</span>
              <p className="mt-3 text-lg font-semibold text-forest-800">{step}</p>
            </li>
          ))}
        </ol>
        <Link to="/programs" className="mt-10 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">
          See how each program fits <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <CtaBand />
    </>
  )
}
