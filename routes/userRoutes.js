const express = require("express");
const { signup, signin, signout, profile, update, testing } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/user", profile);
userRouter.put("/update", update);
userRouter.delete("/signout", signout);
userRouter.get("/", testing);

module.exports = userRouter;