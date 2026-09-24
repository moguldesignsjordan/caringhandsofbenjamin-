import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Header() {
  const { pathname } = useLocation()
  // Tracks the route the menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Caring Hands of Benjamin home">
          <img src="/images/logo.png" alt="" className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-forest-700">Caring Hands</span>
            <span className="block text-xs font-semibold tracking-[0.2em] text-bark-600 uppercase">of Benjamin</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-forest-100 text-forest-800' : 'text-ink/80 hover:text-forest-700'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/get-involved#donate"
            className="ml-3 rounded-full bg-bark-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-bark-700"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-forest-800 lg:hidden"
          onClick={() => setOpenOn(open ? null : pathname)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-forest-900/10 bg-cream px-4 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-forest-100 text-forest-800' : 'text-ink/80'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/get-involved#donate"
            className="mt-4 block rounded-full bg-bark-600 px-5 py-3 text-center font-semibold text-white"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  )
}
