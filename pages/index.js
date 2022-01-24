import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>AA | Twitter Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-blue-600">
          Twitter-Showcase
        </h1>

        <div className="flex flex-wrap items-center max-w-4xl sm:w-full">
          <Image
            src='/twitter.png'
            alt='Twitter'
            width={800}
            height={800}
            className='mx-auto'
          />
        </div>
      </main>
    </div>
  );
}
