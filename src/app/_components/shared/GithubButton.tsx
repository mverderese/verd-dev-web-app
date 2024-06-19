import Image from "next/image";
import { GITHUB_REPO_URL } from "@/app/_components/shared/constants";

export default function GithubButton() {
  return (
    <p className="inline-block">
      <a className="font-medium text-white hover:text-gray-300 sm:py-6 " href={GITHUB_REPO_URL} target="_blank">
        <span className="inline"> View on GitHub </span>
        <Image
          src="/icons/github-mark-white.svg"
          alt="GitHub logo"
          width={16}
          height={16}
          className="inline align-text-top"
        />
      </a>
    </p>
  );
}
