/** Copy shared by the home, consulting and about pages. */

export const strengths = [
  {
    title: "Agent platforms",
    body: "Agent harnesses, skills, MCP tools, streaming, and taking agents from chat to action.",
  },
  {
    title: "Engineering leadership",
    body: "Hiring, growing engineers to senior and staff, and cross-team technical strategy.",
  },
  { title: "0 → 1 product", body: "Two-time co-founder and CTO: a $1M bootstrapped first year, and an exit." },
  { title: "Platform & reliability", body: "Cloud infrastructure, CI/CD, and SOC 2 and HIPAA compliance." },
] as const;

export const services = [
  {
    label: "Fixed scope",
    title: "Audit",
    body: "A clear-eyed look at your AI plans or your current stack: where AI actually helps, build versus buy, and a roadmap you can act on.",
  },
  {
    label: "Hourly or retainer",
    title: "Advisory",
    body: "Ongoing guidance for founders and engineering leaders: architecture reviews, hiring, process, and a sounding board for hard calls.",
  },
  {
    label: "Hands-on",
    title: "Build",
    body: "I write the code: agents, tool calling, retrieval, evals and the platform underneath, taken all the way to production.",
  },
] as const;

export const process = [
  { title: "Intro call", body: "Thirty minutes to understand the problem and whether I'm the right person for it." },
  {
    title: "Scoped proposal",
    body: "A short written plan: goals, deliverables, timeline and how we'll measure success.",
  },
  { title: "The work", body: "Regular check-ins, written updates, and a clean handoff your team can own." },
] as const;

export const clients = [
  { name: "Starbucks", body: "Rebuilt the ecommerce store in three months, ahead of a $100M holiday season." },
  { name: "Great Many", body: "Booking, telehealth and a later technical audit for a hair-growth startup." },
  { name: "The Gleamery", body: "Appointment scheduling for a modern dental-care startup." },
  { name: "Distrix", body: "Leasing and tenant-verification platform for landlords and brokerages." },
] as const;

export const timeline = [
  { name: "HubSpot", years: "2024 –" },
  { name: "Red Krypton", years: "2023 – 24" },
  { name: "Odin", years: "2020 – 24" },
  { name: "Renew", years: "2017 – 20" },
  { name: "Starbucks", years: "2016" },
  { name: "Tag", years: "2013 – 15" },
  { name: "Rutgers, B.S. Computer Science", years: "Education" },
] as const;

export const photos = [
  {
    src: "/images/about/hiking.jpg",
    alt: "Mike and Michelle on a summit above the coast",
    caption: "Hiking with Michelle",
  },
  { src: "/images/about/zoey.jpg", alt: "Zoey the Goldendoodle", caption: "Zoey" },
  { src: "/images/about/drumming.jpg", alt: "Mike playing drums on a porch", caption: "Porch drumming" },
] as const;
