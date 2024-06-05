require("dotenv").config();
const termsAddress = process.env.TERMSADDRESS;
console.log(termsAddress);

const router = require("express").Router();
const { RegisteredUser, Post } = require("../model");

const siteTitle = "Site Title";

router.get("/", async (req, res) => {
  console.log("home route reached, should call home layout");

  try {
    const blogData = Post.findAll({
      raw: true,
      nest: true,
    });

    return res.render("home", {
      siteTitle: siteTitle,
      testData: req.session.testing ? req.session.testData : false,
      loggedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      pageTitle: "Home Page",
    });
  } catch (error) {}
});

router.get("/posts", async (req, res) => {
  console.log("home route reached, should call post layout");
  const blogData = await Blog.findAll({ raw: true });
  //Blog.findByPk(req.params.id,{raw:true});
  return res.render("post", {
    siteTitle: siteTitle,
    pageTitle: "Post Page",
  });
});

router.get("/about", async (req, res) => {
  console.log("home route reached, should call about layout");
  return res.render("about", {
    siteTitle: siteTitle,
    testData: req.session.testing ? req.session.testData : false,
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn,
    pageTitle: "About Page",
  });
});

router.get("/contact", async (req, res) => {
  console.log("home route reached, should call contact layout");
  return res.render("contact", {
    siteTitle: siteTitle,
    pageTitle: "Contact Page",
  });
});

router.get("/signup", async (req, res) => {
  return res.render("signup", {
    termsAddress: termsAddress,
    siteTitle: siteTitle,
    testData: req.session.testing ? req.session.testData : false,
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn,
    pageTitle: "Sign Up Page",
  });
});

router.get("/login", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  return res.render("login", {
    siteTitle: siteTitle,
    testData: req.session.testing ? req.session.testData : false,
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn,
    pageTitle: "Login Page",
  });
});

router.get("/terms-and-conditions", async (req, res) => {
  return res.render("terms-and-conditions", {
    termsAddress: termsAddress,
    siteTitle: siteTitle,
    testData: req.session.testing ? req.session.testData : false,
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn,
    pageTitle: "Terms and Conditions",
  });
});

module.exports = router;
