// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { pair } = req.query || {};

  res.writeHead(301, {
    location: `imessage://chat2gpt%40icloud.com&body=${pair}`,
  });
  res.end();
};
