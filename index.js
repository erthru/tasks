const express = require("express");
const router = require("./router");
const dotEnv = require("dotenv");
const session = require("express-session");
const sessionMiddleware = require("./middlewares/session");

dotEnv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(sessionMiddleware);
app.use(router);

app.set("view engine", "ejs");

const port = Number(process.env.PORT);

app.listen(port, function () {
  console.log(`server run on port: ${port}`);
});
