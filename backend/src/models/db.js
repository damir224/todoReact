const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
// хранилице для сессий. можно использловать другие: https://github.com/expressjs/session#compatible-session-stores
const MongoStore = connectMongo(session);

// подключаем базу данных
mongoose
  .connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Mongoose connected to %s database', process.env.DB_PATH);
  })
  .catch((err) => {
    console.log('Database connection error', err.message);
  });

// подкл. базу данных для хранения сессий
const sessionStore = new MongoStore({
  mongooseConnection: mongoose.createConnection(process.env.SESSION_DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }),
});

module.exports = sessionStore;
