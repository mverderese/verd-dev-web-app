import Image from "next/image";
import { GITHUB_REPO_URL } from "@/app/_components/shared/constants";

export default function GithubButton() {
  return (
    <a className="nav-link" href={GITHUB_REPO_URL} target="_blank">
      <span> View on GitHub </span>
      <Image src="github-mark-white.svg" alt="GitHub logo" width={22} height={22}></Image>
    </a>
  );
}
