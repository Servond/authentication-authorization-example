const express = require("express");
const router = express.Router();

const { verifyToken, checkRoles } = require("../middleware/auth");
const {
  createEventController,
  findEventsByIdController,
} = require("../controllers/eventController");

router.post("/", verifyToken, checkRoles, createEventController);
router.get("/", verifyToken, checkRoles, findEventsByIdController);

module.exports = router;
