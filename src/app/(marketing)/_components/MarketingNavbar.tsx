import React from "react";
import { RESUME_URL } from "@/app/constants";
import MenuItem from "@/app/(marketing)/_components/MenuItem";
import GithubButton from "@/app/_components/GithubButton";

export default function MarketingNavbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-astral text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-2xl text-wheatfield font-semibold min-w-[240px] font-archivo sm:hidden"
            href="/"
            aria-label="Brand"
          >
            MV
          </a>
          <a
            className="flex-none text-2xl text-wheatfield font-semibold min-w-[60px] font-archivo hidden sm:block"
            href="/"
            aria-label="Brand"
          >
            MIKE VERDERESE
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="4" y2="4" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="20" y2="20" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block sm:transition-none sm:duration-0"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <MenuItem title={"About"} link="/about" />
            <MenuItem title={"Portfolio"} link="/portfolio" />
            {/*<MenuItem title={APP_TITLE} link="/app" />*/}
            <MenuItem title="Resume" link={RESUME_URL} newTab />
            <GithubButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
