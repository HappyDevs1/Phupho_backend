const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "User API"})
});

router.post("/signup", userController.RegisterUser);
router.post("/login", userController.login);

export default router;