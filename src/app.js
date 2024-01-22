const express = require("express");
const session = require("express-session");
const app = express();
const apiRouter = require("./routes");
const config = require("./config");
const bodyParser = require("body-parser");
const errorController = require("./controller/errorController");
const port = process.env.PORT || 8080;
const cors = require("cors");
const MongoStore = require("connect-mongo");
//set all config files
config();

app.use(express.json({ limit: "50mb", extended: true }));

app.use(express.static("public"));
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_CONNECT_URL,
    }),
  })
);

app.use("/api", apiRouter);

app.use(errorController);

app.listen(process.env.APP_PORT || 3001, () => {
  console.log("Listening at port", process.env.APP_PORT);
});

module.exports = app;
