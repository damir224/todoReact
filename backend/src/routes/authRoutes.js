const bcrypt = require('bcrypt');
const express = require('express');

const User = require('../models/user.js');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { password, email } = req.body;
  console.log('req.body', req.body);
  console.log('req.session', req.session);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    req.session.user = { id: newUser.id, email: newUser.email };
    console.log('req.session.user', req.session.user);
    res.json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    console.log('err', err);
    return res.json({ message: 'signUp false', err: err.code });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) return res.json({ message: 'wrong Name or password' });
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.json({ message: 'wrong name or Password' });
    }
    req.session.user = { id: user.id, email: user.email };
    res.json({ id: user.id, email: user.email });
  } catch (err) {
    return res.json({ message: 'signUp false', err: err.code });
  }
});

router.get('/logout', (req, res, next) => {
  // req.session.destroy((err) => {
  //   if (err) return next(err);
  //   res.clearCookie('sid');
  //   return res.redirect('/');
  // });
});

router.get('/check', (req, res) => {
  console.log('req.session.user from /check', req.session.user);
  if (req.session.user) {
    res.json({ ...req.session.user });
  }
});

module.exports = router;
