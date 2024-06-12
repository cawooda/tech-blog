require("dotenv").config();
const termsAddress = process.env.TERMSADDRESS;
console.log(termsAddress);

const router = require("express").Router();
const { RegisteredUser, Post, Comment } = require("../model");
const postRoute = require("./postRoutes");

<<<<<<< HEAD
const siteTitle = 'Tech Blog';
=======
const siteTitle = "Site Title";
>>>>>>> parent of fb874ba (ter)

router.use("/posts", postRoute);

<<<<<<< HEAD
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: { all: true, nested: true },
			order: [['created_at', 'DESC']],
		});

		const posts = await postData.map((post) => post.get({ plain: true }));

		res.render('home', {
			posts: posts,
			siteTitle: siteTitle,
			testData: req.session.testing ? req.session.testData : false,
			loggedIn: req.session.loggedIn,
			loggedOut: !req.session.loggedIn,
			pageTitle: 'Home Page',
		});
	} catch (error) {}
=======
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: { all: true, nested: true },
    });

    const posts = await postData.map((post) => post.get({ plain: true }));
    res.render("home", {
      posts: posts,
      siteTitle: siteTitle,
      testData: req.session.testing ? req.session.testData : false,
      loggedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      pageTitle: "Home Page",
    });
  } catch (error) {}
>>>>>>> parent of fb874ba (ter)
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
  return res.render("register-user", {
    termsAddress: termsAddress,
    siteTitle: siteTitle,
    testData: req.session.testing ? req.session.testData : false,
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn,
    pageTitle: "Sign Up Page",
  });
});

router.get("/login", async (req, res) => {
  return res.render("login-user", {
    siteTitle: siteTitle,
    testData: req.session.testing ? req.session.testData : false,
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn,
    pageTitle: "Login Page",
  });
});

router.get("/logout", async (req, res) => {
  req.session.destroy();

  res.redirect("/");
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

router.get("/", (req, res) => {
  console.log("index of controller reached");
  res.status(200).send("controller OK");
});

module.exports = router;
