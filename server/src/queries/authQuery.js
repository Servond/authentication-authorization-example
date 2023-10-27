const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const registerQuery = async (email, username, password, branchId) => {
  const t = await db.sequelize.transaction();
  try {
    const res = await user.create(
      {
        email,
        username,
        password,
        roleId: 1,
        branchId,
      },
      { transaction: t }
    );
    await t.commit();
    return res;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

const loginQuery = async (email) => {
  try {
    const res = await user.findOne({
      where: {
        email,
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const keepLoginQuery = async (id) => {
  try {
    const res = await user.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerQuery,
  loginQuery,
  keepLoginQuery,
};
