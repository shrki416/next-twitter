import axios from "axios";

const TWEETS_END_POINT = `https://api.twitter.com/2/users/`;
const EXPANSIONS = `?expansions=author_id,attachments.media_keys&tweet.fields=created_at,author_id,public_metrics&user.fields=profile_image_url&media.fields=height,media_key,preview_image_url,type,url,width,alt_text`;

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export default async function handler(req, res) {
  const tweetsRes = await axios.get(
    `${TWEETS_END_POINT}${req.query.id}/tweets${EXPANSIONS}`,
    { headers }
  );
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
