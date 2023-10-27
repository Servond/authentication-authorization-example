const express = require("express");
const router = express.Router();

const {
  createBranchController,
  updateBranchController,
  findBranchesController,
} = require("../controllers/branchController");

router.get("/", findBranchesController);
router.post("/", createBranchController);
router.patch("/:id", updateBranchController);

module.exports = router;
