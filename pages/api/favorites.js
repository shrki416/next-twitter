export default async function handler(req, res) {
  const query = req.query.id;
  console.log(`🍌`, query);

  res.send(`Success!`);
}
