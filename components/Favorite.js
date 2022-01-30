import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tweet from "../components/Tweet";
import axios from "axios";
import { useState } from "react";

export default function Favorites({ data }) {
  const [tweets, setTweets] = useState([]);

  async function getTweets(e) {
    const { data } = await axios.get(`/api/favorites?id=${e.target.id}`);
    setTweets(data);
  }

  return (
    <div className="container mx-auto max-w-2xl">
      <Head>
        <title>Favorites Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-around mt-2">
        {data.map((user) => {
          return (
            <button key={user.id} className="pt-4" onClick={getTweets}>
              <Image
                className="rounded-full"
                src={user.profile_image_url}
                width={50}
                height={50}
                alt={user.username}
                id={user.id}
              />
            </button>
          );
        })}
      </div>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight m-4">
        Tweets
      </h1>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}
