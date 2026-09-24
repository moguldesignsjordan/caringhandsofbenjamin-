// Copy scraped from caringhandsofbenjamin.org (Sept 2026). Em dashes replaced per house style.

export const org = {
  name: 'Caring Hands of Benjamin',
  short: 'CHOB',
  tagline: 'A nonprofit organization rooted in compassion, equity, and the relentless pursuit of second chances.',
  city: 'Detroit, Michigan',
  // The live site lists no contact email or donation link. Fill these in before launch.
  email: '',
  donateUrl: '',
}

export const mission =
  'Caring Hands of Benjamin builds and operates integrated systems that stabilize housing and expand economic participation in underserved communities by aligning workforce development, homeownership preparation, and housing stabilization strategies.'

export const vision =
  'A future where stable housing, skilled employment, and economic mobility are structurally connected, allowing families in underserved communities to build, retain, and transfer wealth across generations.'

export const about = [
  'Caring Hands of Benjamin functions as a systems operator, not a single-program nonprofit. CHOB designs and manages interconnected initiatives that address the root drivers of economic instability (income volatility, housing insecurity, and lack of ownership pathways) through coordinated, scalable infrastructure.',
  'Rather than treating workforce development, housing, and financial preparation as separate issues, CHOB aligns them into a unified model that produces durable outcomes over time.',
]

export type Program = {
  id: string
  name: string
  short: string
  role: string
  description: string
  image: string
  imageAlt: string
}

export const programs: Program[] = [
  {
    id: 'mprg',
    name: 'Manpower Resource Group',
    short: 'MPRG',
    role: 'Income stability',
    description:
      'Strengthens economic participation by aligning affordable skilled trade services, professional support, and workforce development that promote income stability and long-term mobility. This system focuses on creating reliable, upwardly mobile income foundations.',
    image: '/images/field-training.jpg',
    imageAlt: 'A group of trainees gathered outside a Detroit home during a winter site visit',
  },
  {
    id: 'housing-incubator',
    name: 'The Housing Incubator',
    short: 'Housing Incubator',
    role: 'Housing stability and ownership',
    description:
      'Builds on that foundation by stabilizing housing supply through the development, rehabilitation, and stewardship of housing assets that support long-term occupancy, affordability, and resident success.',
    image: '/images/housing-rehab.jpg',
    imageAlt: 'A brick colonial home with ladders against it during a roof rehabilitation',
  },
]

export const pathway = ['Income stability', 'Housing stability and ownership']

export const pathwaySummary =
  'Together, these systems create a continuous pathway, reducing economic vulnerability and increasing long-term participation in the economy.'

export type BoardMember = {
  name: string
  title: string
  bio: string[]
}

export const board: BoardMember[] = [
  {
    name: 'Antoine M. Hayes I',
    title: 'Founder & Executive Director',
    bio: [
      "Antoine M. Hayes I is the Co-Founder and Executive Director of Caring Hands of Benjamin, providing organizational vision, leadership continuity, and governance oversight. With nearly 30 years of experience as a licensed real estate broker and his current role within the City of Detroit's Housing Revitalization Department, he brings deep expertise in housing policy, neighborhood development, and market dynamics.",
      "As a Founding Member, Mr. Hayes helped to establish CHOB to address housing instability, economic inequity, and barriers to ownership that faced Detroit residents. As Board Chair, he ensures mission alignment, supports strategic growth, and guides the organization's long-term impact across housing, workforce development, and community investment initiatives.",
    ],
  },
  {
    name: "Shere' R. Kareem",
    title: 'Secretary',
    bio: [
      "Shere' R. Kareem serves as Secretary of the Board of Directors for Caring Hands of Benjamin, supporting organizational governance, documentation, and compliance. Her professional background includes operational leadership, administrative oversight, state audit preparation, and organizational support across mission-driven environments.",
      'As Secretary, Mrs. Kareem is responsible for maintaining official records, meeting minutes, and governance documentation, ensuring transparency, continuity, and accountability as CHOB expands its housing, workforce development, and community benefit initiatives.',
    ],
  },
]

export const openSeatsIntro =
  'CHOB is intentionally expanding the Board of Directors to strengthen governance, risk management, and long-term stability.'

export const openSeats = [
  {
    title: 'Attorney',
    description:
      'We are seeking a real estate attorney with housing litigation, fair housing, foreclosure defense, landlord-tenant law, or related housing policy experience.',
  },
  {
    title: 'IT Pro',
    description:
      'We are seeking an IT or data systems professional with experience in CRM platforms, data governance, reporting, and compliance-driven system design.',
  },
  {
    title: 'Treasurer',
    description:
      'We are seeking a certified accountant, preferably with bookkeeping experience for 501(c)(3) organizations.',
  },
]

export const gallery = [
  { src: '/images/housing-rehab.jpg', alt: 'A Detroit home receiving a new roof' },
  { src: '/images/renovation-attic.jpg', alt: 'A crew member surveying an attic renovation in progress' },
  { src: '/images/program-orientation.jpg', alt: 'Participants completing paperwork at a program orientation' },
  { src: '/images/workforce-intake.jpg', alt: 'A young man filling out workforce program forms' },
  { src: '/images/homeownership-session.jpg', alt: 'A homeownership education session' },
]
