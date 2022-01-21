import axios from 'axios';

export default function favorites({ tweets }) {
  console.log(tweets);

  return (
    <div>
      <h1>Hello from favorites page</h1>
    </div>
  )
}

export async function getStaticProps() {
  const URL = `https://api.twitter.com/2/users/44196397/tweets?expansions=author_id&tweet.fields=created_at,author_id,public_metrics&user.fields=username`;

  const headers = {
    Authorization: `Bearer ${process.env.TOKEN}`,
  };

  const response = await axios.get(URL, { headers });
  const tweets = response.data.data;
  const { users } = response.data.includes;

  tweets.map((tweet) => {
    const user = users.find((user) => user.id === tweet.author_id);
    tweet.username = user.username;
    return tweet;
  });

  return {
    props: {
      tweets,
    },
  };
}
