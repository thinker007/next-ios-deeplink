// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { pair, email = 'chat%40chat2gpt4.com' } = req.query || {};
  //url 转义处理 支持中文和特殊字符
  const encodedpair = encodeURIComponent(pair)
  const encodedEmail = encodeURIComponent(email.includes('%40') ? email : email.replace('@', '%40'));

  res.writeHead(301, {
    location: `imessage://${encodedEmail}&body=${encodedpair}`,
  });
  res.end();
};
