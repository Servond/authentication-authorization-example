const {
  findBranchesService,
  createBranchService,
  updateBranchService,
} = require("../services/branchService");

const findBranchesController = async (req, res) => {
  try {
    const { branchName } = req.query;
    const result = await findBranchesService(branchName);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createBranchController = async (req, res) => {
  try {
    const { name, address } = req.body;

    const result = await createBranchService(name, address);

    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const updateBranchController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    await updateBranchService(id, name, address);

    return res.status(200).json({
      message: "update success",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

module.exports = {
  findBranchesController,
  createBranchController,
  updateBranchController,
};
