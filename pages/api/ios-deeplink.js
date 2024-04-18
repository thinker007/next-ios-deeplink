// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { pair } = req.query || {};
  //url 转义处理 支持中文和特殊字符
  pair = encodeURIComponent(pair)

  res.writeHead(301, {
    location: `imessage://chat2gpt%40icloud.com&body=${pair}`,
  });
  res.end();
};
