import { caseStudiesSchema, type CaseStudy } from "./schema";

/**
 * Case studies, in display order. Parsed at module load so invalid content
 * fails the build (and the prerender) instead of shipping.
 */
export const caseStudies: readonly CaseStudy[] = caseStudiesSchema.parse([
  {
    slug: "hubspot",
    name: "HubSpot",
    role: "Staff Engineering Manager",
    engagement: "Role",
    category: "AI platform",
    years: { start: 2024 },
    summary: "The platform behind nearly all of HubSpot's customer-facing AI agents.",
    headline: "Building the engine under HubSpot's AI agents.",
    intro:
      "I lead the Breeze AI Platform team, which runs the platform that backs nearly all of HubSpot's customer-facing AI agents, including Breeze Assistant.",
    highlighted: true,
    facts: [
      { label: "Role", value: "Staff Engineering Manager" },
      { label: "Team", value: "About 8 engineers" },
      { label: "Years", value: "2024 – present" },
      { label: "Where", value: "Remote, Asbury Park, NJ" },
    ],
    path: [
      {
        dates: "Sep 2024 – Aug 2026",
        title: "Technical Lead II",
        body: "Joined Breeze Assistant as a small founding team and helped grow it into several.",
      },
      {
        dates: "Aug 2026 – Nov 2026",
        title: "Staff Technical Lead",
        body: "Technical lead for Breeze Engine.",
      },
      {
        dates: "Nov 2026 – present",
        title: "Staff Engineering Manager",
        body: "Leading the Breeze AI Platform team.",
        current: true,
      },
    ],
    sections: [
      {
        type: "prose",
        heading: "Context",
        paragraphs: [
          "HubSpot launched Breeze, its AI layer, at INBOUND 2024. The in-app assistant shipped as Breeze Copilot and became Breeze Assistant in 2025. At UNBOUND 2026, HubSpot repositioned it as an AI chief of staff: an assistant that takes action and coordinates specialized agents, rather than just answering questions.",
        ],
      },
      {
        type: "prose",
        heading: "My role",
        paragraphs: [
          "I joined as a tech lead on Breeze Assistant when it was a small team, and grew with it. Today I'm the Staff Engineering Manager for the Breeze AI Platform team. We run the platform that product teams across HubSpot build their customer-facing agents on.",
        ],
      },
      {
        type: "list",
        heading: "Highlights",
        style: "numbered",
        items: [
          {
            body: "Led the technical work that turned Breeze Assistant from a chat assistant into a chief-of-staff agent, the headline AI launch at UNBOUND 2026.",
          },
          {
            body: "Built and run the platform that lets HubSpot product teams and customers bring skills and MCP tools into Breeze.",
          },
        ],
      },
    ],
    themes: [
      "Agent platforms",
      "Skills",
      "MCP",
      "Agent orchestration",
      "Platform engineering",
      "Engineering leadership",
    ],
    links: [
      {
        label: "UNBOUND 2026: Breeze Assistant, your AI chief of staff",
        href: "https://unbound.hubspot.com/sessions/1673725",
      },
      { label: "HubSpot AI", href: "https://www.hubspot.com/products/artificial-intelligence" },
    ],
  },
  {
    slug: "odin",
    name: "Odin",
    role: "Co-Founder & CTO",
    engagement: "Founder",
    category: "0 → 1",
    years: { start: 2020, end: 2024 },
    summary: "Bootstrapped a construction workforce platform to $1M in year one.",
    headline: "Workforce software for the biggest job sites in New York.",
    intro:
      "I co-founded Odin in March 2020 to replace paper-based safety, training and certification tracking on construction projects, then led its technology as CTO for four years.",
    highlighted: true,
    facts: [
      { label: "Role", value: "Co-Founder & CTO" },
      { label: "Years", value: "2020 – 2024" },
      { label: "Funding", value: "Seed led by First Round Capital" },
    ],
    sections: [
      {
        type: "prose",
        heading: "Context",
        paragraphs: [
          "Despite launching into a pandemic and a construction slowdown, we bootstrapped Odin to more than $1 million in revenue in its first year. That growth was anchored by Hudson Yards, the largest privately funded construction project in the world. We then raised a $3 million seed round led by First Round Capital.",
        ],
      },
      {
        type: "metrics",
        heading: "By 2024",
        items: [
          { value: "12%", label: "Quarter-over-quarter revenue growth" },
          { value: "20,000+", label: "Workers onboarded" },
          { value: "700+", label: "Contractors managed" },
          { value: "6M+", label: "Labor hours tracked" },
        ],
      },
      {
        type: "figure",
        src: "/images/work/odin-worker-profile.jpg",
        alt: "Odin's worker profile screen, showing a plumber's site access status across two job sites and a missing safety training card.",
        caption: "Worker profiles showed site access, credentials and missing documents at a glance.",
        width: 1600,
        height: 1117,
      },
      {
        type: "prose",
        heading: "My role",
        paragraphs: [
          "In the early days I led a team of four engineers to build the platform in six months: onboarding workers, tracking certifications, integrating with turnstiles and badge printers, and producing custom workforce reports. We launched at Hudson Yards, managing more than 2,000 workers a day, and iterated quickly with crews who'd never used software on site.",
          "As the company grew, I set technical strategy, doubled the team within nine months of our seed round, and grew several engineers from mid-level into senior and leadership roles. I also led our SOC 2 effort, which opened the door to larger customers with strict security requirements.",
        ],
      },
      {
        type: "list",
        heading: "What we built",
        style: "definitions",
        items: [
          {
            title: "Web app",
            body: "React and TypeScript with Apollo Client, used by site safety teams and supervisors.",
          },
          { title: "Platform API", body: "A TypeScript GraphQL server on Apollo and Express, backed by Postgres." },
          {
            title: "Physical access control",
            body: "Microservices, cloud VMs and on-site VPNs integrated with turnstiles, cameras and access-control vendors.",
          },
          {
            title: "Mobile app",
            body: "React Native for iPhone and Android, so workers could onboard themselves and clock in without extra hardware.",
          },
          { title: "Reporting", body: "Looker Enterprise for standard compliance reports and custom insights." },
        ],
      },
      { type: "video", youtubeId: "hTFARRzFJ9o", title: "Workforce visibility with Odin" },
    ],
    themes: ["TypeScript", "GraphQL", "React Native", "Kubernetes on GCP", "SOC 2", "Hardware integrations"],
    links: [{ label: "useodin.com", href: "https://www.useodin.com/" }],
  },
  {
    slug: "great-many",
    name: "Great Many",
    role: "Head of Engineering",
    engagement: "Agency",
    category: "Health",
    years: { start: 2023, end: 2024 },
    summary: "Booking and telehealth for a hair-growth startup.",
    headline: "Booking and telehealth for a hair-growth brand going national.",
    intro:
      "Great Many is a hair-growth company that brings in-studio treatments, products and prescriptions together in one place. Our agency, Red Krypton, built Great Many's entire technical platform from the ground up, and I led the engineering team.",
    highlighted: true,
    facts: [
      { label: "Role", value: "Head of Engineering" },
      { label: "Via", value: "Red Krypton" },
      { label: "Years", value: "2023 – 2024" },
    ],
    sections: [
      {
        type: "figure",
        src: "/images/work/great-many-appointment-selection.jpg",
        alt: "Great Many's booking flow, asking when you'd like to come in, with a calendar and a grid of appointment times beside a photo of the treatment studio.",
        caption: "The custom booking flow for Great Many's in-studio treatments.",
        width: 1600,
        height: 1057,
      },
      {
        type: "list",
        heading: "What I did",
        style: "numbered",
        items: [
          {
            body: "Built a full-stack booking system for the flagship Plasma Hair Restoration service in TypeScript, using Next.js, Apollo Server and Prisma, integrated with the Boulevard client-experience platform.",
          },
          {
            body: "Orchestrated six vendors into one prescription telehealth flow, so customers could complete purchases entirely online.",
          },
          {
            body: "Set up the analytics behind conversion, acquisition cost and targeted email and SMS campaigns.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Going national",
        paragraphs: [
          "Great Many started with a brick-and-mortar studio in New York but wanted to serve customers everywhere, with products and prescriptions tailored to each person's hair loss. Integrating an asynchronous telehealth provider, an online compounding pharmacy and customer notifications let customers buy entirely online, from consult to prescription, and let Great Many market itself across the country.",
        ],
      },
    ],
    themes: ["Next.js", "Apollo", "Prisma", "Telehealth", "Vendor integrations", "Analytics"],
    links: [{ label: "greatmany.com", href: "https://www.greatmany.com/" }],
  },
  {
    slug: "renew",
    name: "Renew",
    role: "Senior Software Engineer",
    engagement: "Role",
    category: "Health",
    years: { start: 2017, end: 2020 },
    summary: "Led the API and DevOps platforms for a Medicare plan finder.",
    headline: "The API and infrastructure behind a Medicare plan finder.",
    intro:
      "Renew set out to simplify the move into retirement, focusing on health, wealth and time. As lead backend and DevOps engineer, I designed and built the API and the automated infrastructure behind its Medicare Plan Finder.",
    highlighted: false,
    facts: [
      { label: "Role", value: "Senior Software Engineer" },
      { label: "Years", value: "2017 – 2020" },
      { label: "Focus", value: "Backend and DevOps" },
    ],
    sections: [
      {
        type: "figure",
        src: "/images/work/renew-medicare-plan-finder.jpg",
        alt: "Renew's Medicare plan finder, comparing two Medicare Advantage plans by premium, estimated cost and coverage, with filters for plan type, carrier and benefits.",
        caption: "Plan recommendations with cost and benefit comparisons.",
        width: 1600,
        height: 1122,
      },
      {
        type: "list",
        heading: "What I built",
        style: "definitions",
        items: [
          {
            title: "Plan finder API",
            body: "A RESTful Flask API in Python, documented with OpenAPI, that unified monthly CMS data and other sources for the front-end team.",
          },
          {
            title: "Infrastructure",
            body: "HIPAA-compliant AWS infrastructure for every environment, defined in Ansible.",
          },
          {
            title: "Deployments",
            body: "One-command deploys of the API and web app to any environment.",
          },
          {
            title: "Customer success platform",
            body: "Led the team that integrated the InContact softphone and Salesforce, so agents and brokers could focus on helping customers.",
          },
        ],
      },
    ],
    themes: ["Python", "Flask", "OpenAPI", "AWS", "Ansible", "HIPAA"],
    links: [],
  },
  {
    slug: "starbucks",
    name: "Starbucks",
    role: "Consultant",
    engagement: "Consulting",
    category: "Consulting",
    years: { start: 2016, end: 2016 },
    summary: "Rebuilt the online store in three months, ahead of a $100M holiday season.",
    headline: "A new Starbucks store, in time for the holidays.",
    intro:
      "Starbucks' online store ran on an early version of Demandware that was slow, error-prone and not mobile-friendly. With the Verismo launch coming, we rebuilt the entire store in React in three months.",
    highlighted: true,
    facts: [
      { label: "Engagement", value: "Consulting" },
      { label: "Year", value: "2016" },
      { label: "Timeline", value: "Three months" },
    ],
    sections: [
      {
        type: "figure",
        src: "/images/work/starbucks-coffee-grid-desktop.jpg",
        alt: "The rebuilt Starbucks coffee page, filtering Verismo pods by type and flavor note above a grid of espresso roast products.",
        caption: "The rebuilt coffee catalog, with filtering for the Verismo launch.",
        width: 1520,
        height: 1600,
      },
      {
        type: "list",
        heading: "What I did",
        style: "numbered",
        items: [
          {
            body: "Designed the React application and Redux store, with server-side rendering, account token management and asynchronous cart interactions.",
          },
          {
            body: "Built a service that prerendered every page to static HTML and published it to Demandware through its admin API, reusing hosting that had already passed security review.",
          },
          {
            body: "Coordinated across Starbucks teams to launch hundreds of coffee, tea, drinkware and gift products.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Outcome",
        paragraphs: [
          "The new store launched in early November, just in time for the holidays. It became the landing page for anyone on in-store Wi-Fi and generated more than $100 million in revenue that season.",
        ],
      },
    ],
    themes: ["React", "Redux", "Server-side rendering", "Demandware"],
    links: [],
  },
]);

export const findCaseStudy = (slug: string | undefined) => caseStudies.find((study) => study.slug === slug);

export const highlightedCaseStudies = caseStudies.filter(({ highlighted }) => highlighted);

/** The study after `slug`, wrapping around to the first. */
export function nextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  if (!next) throw new Error("caseStudies is empty");
  return next;
}
