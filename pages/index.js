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
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
          Twitter-Showcase
        </h1>

        <Image src="/twitter.svg" alt="Twitter" width={400} height={400} />
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://github.com/shrki416/next-twitter"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Source Code &rarr;</h3>
            <p className="mt-4 text-xl">
              Check out the source code on GitHub, enjoy! 🙂
            </p>
          </a>

          <a
            href="https://developer.twitter.com/en"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Twitter Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about the Twitter API used for this project.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
