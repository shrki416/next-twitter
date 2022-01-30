import axios from "axios";

const TWEETS_END_POINT = `https://api.twitter.com/2/users`;

const params = {
  expansions: "author_id,attachments.media_keys",
  "tweet.fields": "created_at,author_id,public_metrics",
  "user.fields": "profile_image_url,verified",
  "media.fields": "height,media_key,preview_image_url,type,url,width,alt_text",
};

let expansions = new URLSearchParams(params);

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export default async function handler(req, res) {
  const { id } = req.query;
  const URL = `${TWEETS_END_POINT}/${id}/tweets?${expansions.toString()}`;
  const tweetsRes = await axios.get(URL, { headers });

  const tweets = tweetsRes.data;

  function getAuthorInfo(author_id) {
    return tweets.includes.users.find((user) => user.id === author_id);
  }

  const data = tweets.data.map((tweet) => {
    return {
      ...tweet,
      media:
        tweet?.attachments?.media_keys.map((key) =>
          tweets.includes.media.find((media) => media.media_key === key)
        ) || [],
      author: getAuthorInfo(tweet.author_id),
    };
  });

  res.send(data);
}
