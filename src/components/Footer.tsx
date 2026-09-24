import { Link } from 'react-router-dom'
import { org } from '../content'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-cream p-1.5">
              <img src="/images/logo.png" alt="" className="h-14 w-14" />
            </span>
            <span className="font-display text-xl font-semibold text-white">{org.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-100/80">{org.tagline}</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-widest text-leaf uppercase">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <li><Link className="hover:text-white" to="/about">About</Link></li>
            <li><Link className="hover:text-white" to="/programs">Programs</Link></li>
            <li><Link className="hover:text-white" to="/leadership">Leadership</Link></li>
            <li><Link className="hover:text-white" to="/get-involved">Get Involved</Link></li>
            <li><Link className="hover:text-white" to="/get-involved#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-widest text-leaf uppercase">Join the movement</h2>
          <p className="mt-4 text-sm text-forest-100/80">Show your support to keep our work going.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/get-involved#donate"
              className="rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-forest-900 transition hover:bg-white"
            >
              Donate
            </Link>
            <Link
              to="/get-involved#contact"
              className="rounded-full border border-forest-100/30 px-5 py-2.5 text-sm font-semibold hover:border-white hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-forest-100/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {org.name}. A 501(c)(3) nonprofit organization based in {org.city}.
        </p>
      </div>
    </footer>
  )
}
