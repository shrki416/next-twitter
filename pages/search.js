import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  const getTweets = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/api/search?q=${query}`);
    console.log(`🍏`, data);
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
    </div>
  );
}
