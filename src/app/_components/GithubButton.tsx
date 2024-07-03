import Image from "next/image";
import { GITHUB_REPO_URL } from "@/app/constants";

export default function GithubButton() {
  return (
    <a className="font-medium text-white hover:text-gray-300 sm:py-6 " href={GITHUB_REPO_URL} target="_blank">
      <span className="inline pr-1"> View on GitHub </span>
      <Image
        src="/icons/github-mark-white.svg"
        alt="GitHub logo"
        width={16}
        height={16}
        className="inline align-text-top mt-[1px] max-h-[16px]"
      />
    </a>
  );
}
