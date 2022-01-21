// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
const USER_END_POINT = `https://api.twitter.com/2/users/by/username/`;
const TWEETS_END_POINT = `https://api.twitter.com/2/users/`;
const EXPANSIONS = `?expansions=author_id,attachments.media_keys&tweet.fields=created_at,author_id,public_metrics&user.fields=profile_image_url&media.fields=height,media_key,preview_image_url,type,url,width,alt_text`;

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export default async function handler(req, res) {
  const query = req.query.q;
  const response = await axios.get(`${USER_END_POINT}${query}`, { headers });
  const { id } = response.data.data;

  const tweetsRes = await axios.get(
    `${TWEETS_END_POINT}${id}/tweets${EXPANSIONS}`,
    { headers }
  );
  const tweets = tweetsRes.data.data;
  const { users, media } = tweetsRes.data.includes;

  tweets.map((tweet) => {
    const user = users.find((user) => user.id === tweet.author_id);
    tweet.username = user.username;
    tweet.profile_image_url = user.profile_image_url;

    return tweet;
  });

  res.send(tweets);
}
