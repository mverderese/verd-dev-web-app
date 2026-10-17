import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("work", "routes/work.tsx"),
  route("work/:slug", "routes/case-study.tsx"),
  route("consulting", "routes/consulting.tsx"),
  route("about", "routes/about.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
