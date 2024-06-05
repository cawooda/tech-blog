require("dotenv").config();

const port = 3000;

//helpers and utils
const helpers = require("./utils/helpers");
const path = require("path");

//express
const express = require("express");
const app = express();

//sessions
const session = require("express-session");
const { sess } = require("./config/connection");

app.use(session(sess));

//routes
const router = require("./controller");

//view engine
const expressHandlebarsEngine = require("express-handlebars");
const handlebars = expressHandlebarsEngine.create({ helpers });

//aplies a "setting" defining the view engine as handlebars
app.engine("handlebars", handlebars.engine);
//This sets the view engine whhich the app will use when it calls render()
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

//TESTING
function testing(req, _res, next) {
  console.log("testing");
  console.log(process.env.TESTING);
  if (process.env.TESTING) {
    req.session.testing = true;
    req.session.testData = {
      first_name: "Andrew",
      last_name: "Cawood",
      email: "cawooda@gmail.com",
      password: "Secret!123",
    };
  } else {
    req.session.testing = false;
  }
  next();
}

app.use(testing);

app.use(router);

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}. http://localhost:${port}`
  );
});
