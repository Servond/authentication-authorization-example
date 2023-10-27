const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const findUserQuery = async ({ email = null, username = null }) => {
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
          email,
          username,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findUserQuery,
};
