// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { pair = '你好', email = 'chat@chat2gpt4.com' } = req.query || {};
  //url 转义处理 支持中文和特殊字符
  const encodedpair = encodeURIComponent(pair);
  const encodedEmail = encodeURIComponent(email);

  res.writeHead(301, {
    location: `imessage://${encodedEmail}&body=${encodedpair}`,
  });
  res.end();
};
