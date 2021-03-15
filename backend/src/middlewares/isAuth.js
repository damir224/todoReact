module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.json({ session: false, message: 'not authorize' });
  } else next();
};
