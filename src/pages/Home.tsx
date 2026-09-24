import { ArrowRight, Compass, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import SectionHeading from '../components/SectionHeading'
import { about, gallery, mission, org, pathway, programs, vision } from '../content'

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-900">
        <img
          src="/images/banner-hero.jpg"
          alt="A young participant and a CHOB mentor smiling beside the Caring Hands of Benjamin banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_30%] opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 from-30% via-forest-900/85 to-forest-900/10" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">{org.city}</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
            Rebuilding lives.
            <br />
            <span className="text-leaf">Restoring hope.</span>
            <br />
            Redefining opportunity.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-100/90 sm:text-xl">{org.tagline}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/get-involved#donate"
              className="rounded-full bg-leaf px-7 py-3.5 text-center font-semibold text-forest-900 transition hover:bg-white"
            >
              Support our work
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore our programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-xl shadow-forest-900/5 ring-1 ring-forest-900/5 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
              <Target className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-forest-800">Our mission</h2>
            <p className="mt-3 leading-relaxed text-ink/80">{mission}</p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-xl shadow-forest-900/5 ring-1 ring-forest-900/5 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bark-500/15 text-bark-600">
              <Compass className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-forest-800">Our vision</h2>
            <p className="mt-3 leading-relaxed text-ink/80">{vision}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
        <img
          src="/images/community-group.jpg"
          alt="A large group of CHOB participants and mentors gathered around a table at a community meeting"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
        />
        <div>
          <SectionHeading eyebrow="About us" title="A systems operator, not a single-program nonprofit" />
          {about.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-ink/80">{p}</p>
          ))}
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">
            Learn more about CHOB <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="How our programs work together" title="Two systems. One continuous pathway." />

          <ol className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {pathway.map((step, i) => (
              <li key={step} className="flex flex-1 items-center gap-3">
                <span className="flex flex-1 items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-forest-800 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-600 text-sm text-white">{i + 1}</span>
                  {step}
                </span>
                {i < pathway.length - 1 && <ArrowRight className="hidden h-5 w-5 shrink-0 text-bark-500 sm:block" aria-hidden />}
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {programs.map((p) => (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest-900/5">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.imageAlt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold tracking-widest text-teal uppercase">{p.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-forest-800">{p.name}</h3>
                  <p className="mt-3 line-clamp-4 flex-1 leading-relaxed text-ink/75">{p.description}</p>
                  <Link to={`/programs#${p.id}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="In the community" title="The work, on the ground in Detroit" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
