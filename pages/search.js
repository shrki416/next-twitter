import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [tweets, setTweets] = useState([]);

  const getTweets = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/api/search?q=${query}`);
    setTweets(data);
    setQuery("");
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <h1>Search Twitter</h1>
      <form onSubmit={getTweets}>
        <input
          type="text"
          aria-label="Search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Send</button>
      </form>
      {
        tweets.map((tweet) => (
          Object.keys(tweet).length > 0 && (
            <div key={tweet.id} className="border-b border-gray-400 pb-4">
              <div className="flex">
                <img
                  src={tweet.profile_image_url}
                  alt={tweet.username}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <p className="font-bold">
                    <Link href="/api/user/[id]" as={`/api/user/${tweet.username}`}>
                      <a>{tweet.username}</a>
                    </Link>
                  </p>
                  <p className="text-sm">{tweet.text}</p>
                </div>
              </div>
            </div>
        ))
      )}
    </div>
  );
}
