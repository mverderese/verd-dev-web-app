import { NotFound } from "~/components/NotFound/NotFound";
import { titleForEnv } from "~/lib/meta";
import { site } from "~/lib/site";

export const meta = () => [{ title: titleForEnv(`Not found | ${site.name}`) }, { name: "robots", content: "noindex" }];

export default function NotFoundRoute() {
  return <NotFound />;
}
