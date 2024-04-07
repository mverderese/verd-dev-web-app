import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Verderese Development</h1>
      <h2>Innovation Through Custom Solutions</h2>

      <div className="relative flex place-items-center ">
        <Image
          className="relative"
          src="/verderese_development_logo.png"
          alt="Verderese Development Logo"
          width={428}
          height={200}
          priority
        />
      </div>

      <h3>
        Current environment: <code>{process.env.NEXT_PUBLIC_APP_ENV}</code>
      </h3>

      <a target="_blank" href="https://github.com/mverderese/verd-dev-web-app">
        View this project on GitHub
      </a>
    </main>
  );
}
