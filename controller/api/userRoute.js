const router = require("express").Router();
const { RegisteredUser } = require("../../model");
const { validatePassword } = require("../../utils/helpers");

//Post requests to the root of users/ creates a new user with {firstname,lastname,email and password}
router.post("/", async (req, res) => {
  if (!validatePassword(req.body.password)) {
    res
      .status(404)
      .json({ message: "password does not meet requirements" })
      .end();
    console.log("password validation failed");
    return;
  } else {
    const newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const userCreated = await RegisteredUser.create(newUser, {});
      if (userCreated) {
        req.session.logged_in = true;
        res.status(201).json(newUser);
      } else {
        res.status(405).json({
          message: "something went wrong trying to register this user",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    //finds the user based on password submitted in body
    const userData = await RegisteredUser.findOne({
      where: {
        email: req.body.email,
      },
    });
    //couldnt find user? send back a message letting client know.
    if (!userData) {
      res.status(400).json({ message: "Incorrect email, please try again" });
      return;
    }
    //the password is valid if the checkPassword method whick lives with the registered user model returns true. It is checking bcrypt.
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorect password, please try again" });
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user: userData, message: "You are now logged in!" });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
