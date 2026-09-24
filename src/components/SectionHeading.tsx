type Props = {
  eyebrow: string
  title: string
  intro?: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, title, intro, center }: Props) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-forest-800 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink/75">{intro}</p>}
    </div>
  )
}
