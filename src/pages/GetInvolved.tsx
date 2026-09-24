import { HandHeart, Heart, Users } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { org } from '../content'

const ways = [
  {
    icon: Heart,
    title: 'Give',
    body: 'Your gift funds workforce training, homeownership education, and the rehabilitation of Detroit homes.',
  },
  {
    icon: Users,
    title: 'Serve on the board',
    body: 'We are seeking an attorney, an IT professional, and a treasurer to strengthen governance and long-term stability.',
  },
  {
    icon: HandHeart,
    title: 'Partner with us',
    body: 'Lenders, trades, employers, and community organizations help families move from readiness to ownership.',
  },
]

const inputClass =
  'mt-2 block w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink ring-1 ring-forest-900/15 focus:ring-2 focus:ring-forest-500 focus:outline-none'

export default function GetInvolved() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `${data.get('interest')} inquiry from ${data.get('name')}`
    const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Join the movement"
        intro="Show your support to keep our work going."
        image="/images/hands-together.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {ways.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-forest-900/5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-forest-800">{title}</h2>
              <p className="mt-3 leading-relaxed text-ink/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="donate" className="scroll-mt-24 bg-forest-800 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">Donate</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Help families build lasting stability</h2>
            <p className="mt-5 text-lg leading-relaxed text-forest-100/90">
              Every contribution strengthens the pathway from income stability to lasting homeownership
              for families in underserved communities.
            </p>
            <a
              href={org.donateUrl || '#contact'}
              target={org.donateUrl ? '_blank' : undefined}
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-leaf px-8 py-3.5 font-semibold text-forest-900 transition hover:bg-white"
            >
              Donate now
            </a>
          </div>
          <img src="/images/housing-rehab.jpg" alt="A Detroit home being restored" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <SectionHeading
            eyebrow="Contact us"
            title="Let's build this together"
            intro="Questions about our programs, board seats, partnerships, or giving? Send us a note and our team will follow up."
          />
          <img src="/images/team.jpg" alt="CHOB team members" className="mt-10 hidden aspect-[4/3] w-full rounded-3xl object-cover md:block" />
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-forest-900/5 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-forest-800">
              Name
              <input name="name" required autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-semibold text-forest-800">
              Email
              <input name="email" type="email" required autoComplete="email" className={inputClass} />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-forest-800">
            I'm interested in
            <select name="interest" className={inputClass} defaultValue="General">
              <option>General</option>
              <option>Programs</option>
              <option>Board seat</option>
              <option>Donating</option>
              <option>Partnership</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-semibold text-forest-800">
            Message
            <textarea name="message" required rows={5} className={inputClass} />
          </label>
          <button type="submit" className="mt-7 w-full rounded-full bg-forest-600 px-7 py-3.5 font-semibold text-white transition hover:bg-forest-700">
            Send message
          </button>
          {sent && (
            <p className="mt-4 text-center text-sm text-forest-700" role="status">
              Your email app should open with your message ready to send.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
