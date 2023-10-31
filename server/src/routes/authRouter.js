const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  keepLoginController,
} = require("../controllers/authController");

const { verifyToken } = require("../middleware/auth");
const { uploadAvatarFile } = require("../middleware/multer");

router.post("/login", loginController);
router.post("/register", uploadAvatarFile, registerController);
router.get("/keep-login", verifyToken, keepLoginController);

module.exports = router;
