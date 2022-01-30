import Favorite from "../components/Favorite";
import axios from "axios";

export async function getStaticProps() {
  const users = [
    "HBHarvest",
    "epicurious",
    "food52",
    "EatingWell",
    "bonappetit",
  ];

  const BASE_URL = `https://api.twitter.com/2/users/by/username/`;
  const EXPANSIONS = `user.fields=profile_image_url,verified`;

  const headers = {
    Authorization: `Bearer ${process.env.TOKEN}`,
  };

  const data = users.map(async (user) => {
    const response = await axios.get(`${BASE_URL}${user}?${EXPANSIONS}`, {
      headers,
    });
    return response.data.data;
  });

  return {
    props: {
      data: await Promise.all(data),
    },
  };
}

export default function favorites({ data }) {
  return <Favorite data={data} />;
}
