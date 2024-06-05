const router = require("express").Router();
const registeredUserRoute = require("./userRoute");

router.use("/users", registeredUserRoute);

router.get("/", (res, req) => {
  console.log("api reached");
  req.send("api reached");
});

module.exports = router;
