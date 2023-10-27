const {
  findBranchesQuery,
  findBranchQuery,
  createBranchQuery,
  updateBranchQuery,
} = require("../queries/branchQuery");

const findBranchesService = async (branchName) => {
  try {
    const res = await findBranchesQuery(branchName);

    return res;
  } catch (err) {
    throw err;
  }
};

const createBranchService = async (branchName, address) => {
  try {
    const check = await findBranchQuery({ branchName });

    if (check) throw new Error("Branch already exist");

    const res = await createBranchQuery(branchName, address);

    return res;
  } catch (err) {
    throw err;
  }
};

const updateBranchService = async (id, branchName, address) => {
  try {
    const check = await findBranchQuery({ id });

    if (!check) throw new Error("Branch doesnt exist");

    await updateBranchQuery(id, branchName, address);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findBranchesService,
  createBranchService,
  updateBranchService,
};
