import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="font-display text-7xl font-semibold text-leaf">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-forest-800">Page not found</h1>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-forest-600 px-7 py-3 font-semibold text-white hover:bg-forest-700">
        Back home
      </Link>
    </section>
  )
}
