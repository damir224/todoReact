module.exports = (req, res, next) => {
  console.log(
    'req.session:%s, req.cookie:%s, req.body:%s',
    req.session,
    req.cookie,
    req.body
  );
  next();
};
