import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-forest-700 px-6 py-14 text-center sm:px-12">
        <img src="/images/hands-together.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">Get involved</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">Join the movement</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">Show your support to keep our work going.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/get-involved#donate" className="rounded-full bg-leaf px-7 py-3 font-semibold text-forest-900 transition hover:bg-white">
            Donate
          </Link>
          <Link to="/get-involved#contact" className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
