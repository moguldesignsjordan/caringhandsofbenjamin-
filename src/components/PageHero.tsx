type Props = {
  eyebrow: string
  title: string
  intro?: string
  image: string
}

export default function PageHero({ eyebrow, title, intro, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900 via-forest-900/70 to-forest-900/30" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-leaf uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-100/90">{intro}</p>}
      </div>
    </section>
  )
}
