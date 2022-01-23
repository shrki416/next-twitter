import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tweet from "../components/Tweet";
import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [tweets, setTweets] = useState([]);

  const getTweets = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/api/search?q=${query}`);
    console.log(`🚀`, data);
    setTweets(data);
    setQuery("");
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <form
        onSubmit={getTweets}
        className="flex flex-col items-center justify-center rounded p-6"
      >
        <label
          className="font-semibold text-lg"
          htmlFor="Search"
        >
          Search Twitter Username
        </label>
        <input
          type="text"
          aria-label="Search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        />
        <button className='flex items-center justify-center bg-blue-600 rounded text-blue-100 hover:bg-blue-700 h-12 mt-4 w-64'>
          Send
        </button>
      </form>

      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        Tweets
      </h1>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}
