const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./src/routes/authRoutes.js');
const toDoRoutes = require('./src/routes/toDoRoutes.js');
const sessionStore = require('./src/models/db.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 5000;

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,POST,PATCH,DELETE,OPTIONS, PUT',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.use(cookieParser());

app.use(
  session({
    name: 'sid', // название куки
    // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false, // Если true, сохраняет сессию, даже если она не поменялась
    saveUninitialized: false, // Если false, куки появляются только при установке req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      sameSite: false, // this may need to be false is you are accessing from another React app
      httpOnly: false, // this must be false if you want to access the cookie
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
    },
  })
);

// app.use(express.static(path.join(__dirname, 'build')));

app.use('/auth', authRoutes);
app.use('/todo', toDoRoutes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
});
