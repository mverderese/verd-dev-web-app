import { NotFound } from "~/components/NotFound/NotFound";
import { notFoundMeta } from "~/lib/meta";

export const meta = notFoundMeta;

export default function NotFoundRoute() {
  return <NotFound />;
}
