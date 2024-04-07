export default function AppPage() {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <header>
        <p className="mb-2 text-sm font-semibold text-blue-600">Starter Pages & Examples</p>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Application Layout: Sidebar & Header using Tailwind CSS
        </h1>
        <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
          This is a simple application layout with sidebar and header examples using Tailwind CSS.
        </p>
        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <a
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
            href="/"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </a>
        </div>
      </header>
    </div>
  );
}
