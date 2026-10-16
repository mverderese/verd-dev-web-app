export const site = {
  name: "Mike Verderese",
  company: "Verderese Development LLC",
  companyShort: "Verderese Development",
  title: "AI Engineering Leader",
  tagline: "Engineering leader for AI products, from the platform up.",
  description:
    "Mike Verderese leads the Breeze AI Platform team at HubSpot and advises teams on putting AI into production through Verderese Development.",
  location: "Asbury Park, NJ",
  email: "verderese@gmail.com",
  links: {
    bookCall: "https://app.reclaim.ai/m/mike-verderese/flexible-quick-meeting",
    linkedIn: "https://www.linkedin.com/in/mike-verderese/",
    github: "https://github.com/mverderese/verd-dev-web-app",
    resume: "https://storage.googleapis.com/verderese-development-public-files/Mike_Verderese_Resume.pdf",
  },
  ogImage: "/images/og.jpg",
} as const;

export const mailto = `mailto:${site.email}`;
