const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const validator = require("../middleware/validator");
const { verifyToken, checkRoles } = require("../middleware/auth");

const { uploadEventFile } = require("../middleware/multer");

const {
  createEventController,
  findEventsByIdController,
} = require("../controllers/eventController");

router.post(
  "/",
  verifyToken,
  checkRoles,
  uploadEventFile,
  validator([body("eventName").notEmpty()]),
  createEventController
);
router.get("/", verifyToken, checkRoles, findEventsByIdController);

module.exports = router;
